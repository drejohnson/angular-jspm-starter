import qs from 'querystring';
import jwt from 'jwt-simple';
import request from 'request';
import config from '../config';
import User from '../models/User';
import {createJWT} from '../middleware/authenticated';

// GET /api/me
export const getProfile = (req, res) => {
  User.findById(req.user)
  .then((user) => {
    res.send(user);
  });
};

// PUT /api/me
export const updateProfile = (req, res) => {
  User.findById(req.user)
  .then((user) => {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save((err) => {
      res.status(200).end();
    });
  });
};

// Log in with Email
export const authLogin = (req, res) => {
  User.findOne({ email: req.body.email }, '+password')
  .then((user) => {
    if (!user) {
      return res.status(401).send({ message: 'Invalid email and/or password' });
    }
    user.comparePassword(req.body.password)
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid email and/or password' });
      }
      res.send({ token: createJWT(user) });
    });
  });
};

// Create Email and Password Account
export const authSignup = (req, res) => {
  User.findOne({
    email: req.body.email
  })
  .then((existingUser) => {
    if (existingUser) {
      return res.status(409).send({
        message: 'Email is already taken'
      });
    }
    const user = new User({
      displayName: req.body.displayName,
      email: req.body.email,
      password: req.body.password
    });
    return user.save();
  })
  .then((result) => {
    res.send({
      token: createJWT(result)
    });
  }, (err) => {
    res.status(500).send({
      message: err.message
    });
  });
};

// Login with Facebook
export const authFacebook = (req, res) => {
  const fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name'];
  const accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  const graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
  const params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.FACEBOOK_SECRET,
    redirect_uri: req.body.redirectUri
  };
  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params, json: true }).then((response, accessToken) => {
    if (response.statusCode !== 200) {
      return res.status(500).send({ message: accessToken.error.message });
    }
    // Step 2. Retrieve profile information about the current user.
    request.get({ url: graphApiUrl, qs: accessToken, json: true }).then((response, profile) => {
      if (response.statusCode !== 200) {
        return res.status(500).send({ message: profile.error.message });
      }
      console.log(profile);
      if (req.headers.authorization) {
        User.findOne({ facebook: profile.id }).then((existingUser) => {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a Facebook account that belongs to you' });
          }
          let token = req.headers.authorization.split(' ')[1];
          let payload = jwt.decode(token, config.TOKEN_SECRET);
          return User.findById(payload.sub);
        }).then((user) => {
          if (!user) {
            return res.status(400).send({ message: 'User not found' });
          }
          user.facebook = profile.id;
          user.picture = user.picture || 'https://graph.facebook.com/v2.3/' + profile.id + '/picture?type=large';
          user.displayName = user.displayName || profile.name;
          user.save(() => {
            let token = createJWT(user);
            res.send({ token: token });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ facebook: profile.id }).then((existingUser) => {
          if (existingUser) {
            let token = createJWT(existingUser);
            return res.send({ token: token });
          }
          let user = new User();
          user.facebook = profile.id;
          user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
          user.displayName = profile.name;
          user.save(() => {
            let token = createJWT(user);
            res.send({ token: token });
          });
        });
      }
    });
  });
};

// Login with Twitter
export const authTwitter = (req, res) => {
  const requestTokenUrl = 'https://api.twitter.com/oauth/request_token';
  const accessTokenUrl = 'https://api.twitter.com/oauth/access_token';
  const profileUrl = 'https://api.twitter.com/1.1/users/show.json?screen_name=';

  // Part 1 of 2: Initial request from Satellizer.
  if (!req.body.oauth_token || !req.body.oauth_verifier) {
    const requestTokenOauth = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      callback: req.body.redirectUri
    };

    // Step 1. Obtain request token for the authorization popup.
    request.post({ url: requestTokenUrl, oauth: requestTokenOauth }).then((response, body) => {
      const oauthToken = qs.parse(body);

      // Step 2. Send OAuth token back to open the authorization screen.
      res.send(oauthToken);
    });
  } else {
    // Part 2 of 2: Second request after Authorize app is clicked.
    const accessTokenOauth = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      token: req.body.oauth_token,
      verifier: req.body.oauth_verifier
    };

    // Step 3. Exchange oauth token and oauth verifier for access token.
    request.post({ url: accessTokenUrl, oauth: accessTokenOauth }).then((response, accessToken) => {
      accessToken = qs.parse(accessToken);

      const profileOauth = {
        consumer_key: config.TWITTER_KEY,
        consumer_secret: config.TWITTER_SECRET,
        oauth_token: accessToken.oauth_token
      };

      // Step 4. Retrieve profile information about the current user.
      request.get({
        url: profileUrl + accessToken.screen_name,
        oauth: profileOauth,
        json: true
      }).then((response, profile) => {
        // Step 5a. Link user accounts.
        if (req.headers.authorization) {
          User.findOne({ twitter: profile.id }).then((existingUser) => {
            if (existingUser) {
              return res.status(409).send({ message: 'There is already a Twitter account that belongs to you' });
            }
            let token = req.headers.authorization.split(' ')[1];
            let payload = jwt.decode(token, config.TOKEN_SECRET);
            return User.findById(payload.sub);
          }).then((user) => {
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.twitter = profile.id;
            user.displayName = user.displayName || profile.name;
            user.picture = user.picture || profile.profile_image_url.replace('_normal', '');
            user.save((err) => {
              res.send({ token: createJWT(user) });
            });
          });
        } else {
          // Step 5b. Create a new user account or return an existing one.
          User.findOne({ twitter: profile.id }).then((existingUser) => {
            if (existingUser) {
              return res.send({ token: createJWT(existingUser) });
            }
            const user = new User();
            user.twitter = profile.id;
            user.displayName = profile.name;
            user.picture = profile.profile_image_url.replace('_normal', '');
            user.save(() => {
              res.send({ token: createJWT(user) });
            });
          });
        }
      });
    });
  }
};

export const authGoogle = (req, res) => {
  const accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  const peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';

  const params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GOOGLE_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };
  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { json: true, form: params }).then((response, token) => {
    const accessToken = token.access_token;
    const headers = { Authorization: 'Bearer ' + accessToken };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: peopleApiUrl, headers: headers, json: true }).then((response, profile) => {
      if (profile.error) {
        return res.status(500).send({message: profile.error.message});
      }
      // Step 3a. Link user accounts.
      if (req.headers.authorization) {
        User.findOne({ google: profile.sub }).then((existingUser) => {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a Google account that belongs to you' });
          }
          let token = req.headers.authorization.split(' ')[1];
          const payload = jwt.decode(token, config.TOKEN_SECRET);
          return User.findById(payload.sub);
        }).then((user) => {
          if (!user) {
            return res.status(400).send({ message: 'User not found' });
          }
          user.google = profile.sub;
          user.picture = user.picture || profile.picture.replace('sz=50', 'sz=200');
          user.displayName = user.displayName || profile.name;
          user.save(() => {
            let token = createJWT(user);
            res.send({ token: token });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ google: profile.sub }).then((existingUser) => {
          if (existingUser) {
            return res.send({ token: createJWT(existingUser) });
          }
          const user = new User();
          user.google = profile.sub;
          user.picture = profile.picture.replace('sz=50', 'sz=200');
          user.displayName = profile.name;
          user.save((err) => {
            let token = createJWT(user);
            res.send({ token: token });
          });
        });
      }
    });
  });
};

// Unlink Provider
export const authUnlink = (req, res) => {
  const provider = req.body.provider;
  const providers = ['facebook', 'google', 'twitter'];

  if (providers.indexOf(provider) === -1) {
    return res.status(400).send({ message: 'Unknown OAuth Provider' });
  }

  User.findById(req.user).then((user) => {
    if (!user) {
      return res.status(400).send({ message: 'User Not Found' });
    }
    user[provider] = undefined;
    user.save(() => {
      res.status(200).end();
    });
  });
};

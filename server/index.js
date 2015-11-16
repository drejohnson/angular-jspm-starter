/**
 * Module dependencies.
 */
import fs from 'fs';
import http from 'http';
import path from 'path';
import qs from 'querystring';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import colors from 'colors';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import expressValidator from 'express-validator';
import favicon from 'serve-favicon';
import logger from 'morgan';
import lusca from 'lusca';
import jwt from 'jwt-simple';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
// import prerender from 'prerender-node';
// import prismicio from 'express-prismic';
import redis from 'redis';
import request from 'request';
import session from 'express-session';

import User from './models/User';
import config from './config';
import Configuration from './config/prismic-configuration';

import {ensureAuthenticated, createJWT} from './middleware/authenticated';
/**
 * Controllers (route handlers).
 */
import * as defaultController from './controllers/default';
import * as apiController from './controllers/api';
import * as userController from './controllers/user';

// const client = redis.createClient();
// prerender.set('beforeRender', (req, done) => {
//   client.get(req.url, done);
// }).set('afterRender', (err, req, prerender_res) => {
//   client.set(req.url, prerender_res.body);
// });

/**
 * Create Express server.
 */
const app = express();
mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', () => {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.'.red);
  // process.exit(1);
});

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compression());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.TOKEN_SECRET,
  // store: new MongoStore.session({ url: config.MONGO_URI, autoReconnect: true })
}));
// app.use(lusca({
//   csrf: true,
//   xframe: 'SAMEORIGIN',
//   xssProtection: true,
//   angular: true
// }));

const staticOptions = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: 'index.html',
  lastModified: true,
  maxAge: '1d',
  setHeaders(res, path, stat) {
    res.set('x-timestamp', Date.now());
    res.header('Cache-Control', 'public, max-age=1d');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
};

app.use('/', express.static(path.join(__dirname, '../static'), staticOptions ));
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));

app.use(errorHandler());

const handleError = (res, err) => {
  if (err.status === 404) {
    res.status(404).send('404 not found');
  } else {
    res.status(500).send('Error 500: ' + err.message);
  }
};

// Primary Routes
app.get('/', defaultController.getDefault);

// API Routes
app.get('/api', apiController.getApi);
// app.get('/api/videos', apiController.getVideos);
// app.get('/api/videos/:id', apiController.getVideo);
// app.get('/api/featured', apiController.getFeatured);
// app.get('/api/videos/channel/docu-series', apiController.getDocuSeries);
// app.get('/api/videos/channel/radio-tv-film', apiController.getRadioTvFilm);
// app.get('/api/videos/channel/music', apiController.getMusic);
// app.get('/api/videos/channel/comedy', apiController.getComedy);
// app.get('/api/videos/channel/lifestyle', apiController.getLifestyle);
// app.get('/api/related/:id', apiController.getRelated);
//
// app.get('/api/posts', apiController.getPosts);
// app.get('/api/posts/:id', apiController.getPost);
//
// app.get('/api/audio', apiController.getAudioList);
// app.get('/api/audio/:id', apiController.getAudioDetail);
//
// app.get('/api/search/:q', apiController.getSearch);
app.get('/api/me', ensureAuthenticated, userController.getProfile);
app.put('/api/me', ensureAuthenticated, userController.updateProfile);

// OAuth authentication routes. (Sign in)
app.post('/auth/login', ensureAuthenticated, userController.authLogin);
app.post('/auth/signup', ensureAuthenticated, userController.authSignup);
app.post('/auth/facebook', ensureAuthenticated, userController.authFacebook);
app.post('/auth/twitter', ensureAuthenticated, userController.authTwitter);
app.post('/auth/google', ensureAuthenticated, userController.authGoogle);
app.post('/auth/unlink', ensureAuthenticated, userController.authUnlink);

// Prismic Preview Route
// app.route('/preview').get(prismic.preview);

app.get('/*', defaultController.getCatchAll);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  console.log('development');
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;

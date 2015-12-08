import jwt from 'express-jwt';

const authenticate = jwt({
  secret: new Buffer(`${process.env.AUTH0_CLIENT_SECRET}`, 'base64'),
  audience: `${process.env.AUTH0_CLIENT_ID}`
});

export default authenticate;

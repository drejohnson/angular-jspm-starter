export default {
  development: {
    isProduction: false,
    port: 8080,
    app: {
      name: 'ExpressJS Example Development'
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'illmatic1994VSready2die1994',
    MONGO_URI: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/dottv',
    // OAuth 2.0
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || '4wFh0o2hckdi5FHTScgIvSEU',

    // OAuth 1.0
    TWITTER_KEY: process.env.TWITTER_KEY || '20HIuAy6nVIgPtWZh92PPf9jn',
    TWITTER_SECRET: process.env.TWITTER_SECRET || '2Z7IHxldIYaj0Fc5YxQFfh8Z1RtIXfJn1cHlO24EmMwUeAWpgS'
  },
  production: {
    isProduction: true,
    port: process.env.PORT || 8080,
    app: {
      name: 'ExpressJS Example Production'
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'illmatic1994VSready2die1994',
    MONGO_URI: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://mongo/dottv',
    // OAuth 2.0
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || '4wFh0o2hckdi5FHTScgIvSEU',

    // OAuth 1.0
    TWITTER_KEY: process.env.TWITTER_KEY || '20HIuAy6nVIgPtWZh92PPf9jn',
    TWITTER_SECRET: process.env.TWITTER_SECRET || '2Z7IHxldIYaj0Fc5YxQFfh8Z1RtIXfJn1cHlO24EmMwUeAWpgS'
  }
}[process.env.NODE_ENV || 'development'];

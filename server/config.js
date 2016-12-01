const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/pin-it',
  port: process.env.PORT || 8000,
  twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
  secretTwitterConsumerKey: process.env.SECRET_TWITTER_CONSUMER_KEY,
  twitterCallbackURL: process.TWITTER_CALLBACK_URL || '	http://192.168.1.3:8000/login/twitter/callback'
}

export default config;

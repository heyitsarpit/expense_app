require('dotenv').config()

module.exports = {
    env: {
      API_URL_DEV: process.env.API_URL_DEV,
      API_URL_PROD:process.env.API_URL_PROD
    },
  };

require("dotenv").config();

const config = {
  PORT: process.env.PORT || 3010,
  TOKEN: process.env.TOKEN,
  DB_URL: process.env.DB_URL,
};

module.exports = config;

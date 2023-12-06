const config = require("./config");
const { connect } = require("mongoose");
const { Bot, session } = require("grammy");
require("dotenv/config");
const BotController = require("./modules/bot1");
const commandBot = require("./helper/commands");
const token = config.TOKEN;

const bot = new Bot(token);

bot.use(
  session({
    initial: () => ({
      step: "menu",
    }),
  })
);

bot.use(commandBot);
bot.use(BotController);

const bootstrap = async (bot) => {
  try {
    const connetParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    connect(config.DB_URL, connetParams);
    console.log("Lotin-Krill-bot Database connection");
  } catch (error) {
    console.log(error.message);
  }
};
bootstrap();
bot.start(console.log("Lotin-Krill-bot started"));

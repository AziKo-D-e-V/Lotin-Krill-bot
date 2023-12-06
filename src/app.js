const config = require("./config");
const express = require("express");
const { connect } = require("mongoose");
const { Bot, session } = require("grammy");
require("dotenv/config");

const BotController = require("./modules/bot1");
const commandBot = require("./helper/commands");
const token = config.TOKEN;

const app = express();
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

    app.listen(config.PORT, () => {
      console.log(`------ ${config.PORT} --------`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
bootstrap();

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
    bot.api.sendMessage(-1001924591062, "Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
    bot.api.sendMessage(-1001924591062, "Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
    bot.api.sendMessage(-1001924591062, "Unknown error:", e);
  }
});

bot.start(console.log("Lotin-Krill-bot started"));

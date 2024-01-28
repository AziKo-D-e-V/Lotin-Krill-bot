const config = require("./config");
const cors = require("cors");
const express = require("express");
const path = require("path");
const { connect } = require("mongoose");
const usersModel = require("./models/users.model");
const { Bot, session } = require("grammy");
require("dotenv/config");

const BotController = require("./modules/bot1");
const commandBot = require("./helper/commands");
const messagesModel = require("./models/messages.model");
const token = config.TOKEN;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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

    app.get("/", async (req, res) => {
      try {
        const count = await usersModel.countDocuments();
        const countMessage = await messagesModel.countDocuments();
        console.log("Count is", count);
        console.log("Count Message is", countMessage);
        res.render("index", { count: count, countMessage: countMessage });
      } catch (error) {
        console.log(error);
        res.render("index", { count: 0 });
      }
    });

    app.get("/test", async (req, res) => {
      console.log(new Date());
      res.status(200).json({ results: success, time: new Date() });
    });
    
  } catch (error) {
    console.log(error.message);
  }
  const path = require("path");
};
bootstrap();

bot.start(console.log("Lotin-Krill-bot started"));

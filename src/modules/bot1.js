const { Router } = require("@grammyjs/router");
const router = new Router((ctx) => ctx.session.step);
const bot = require("../helper/commands");
const { Keyboard } = require("grammy");
const usersModel = require("../models/users.model");
const translateCT = require("./convert");
const messagesModel = require("../models/messages.model");

bot.command("start", async (ctx) => {
  try {
    const first_name = ctx.from?.first_name || "";
    const last_name = ctx.from?.last_name || "";
    const user_id = ctx.from.id;
    const username = ctx.from?.username || "";
    await ctx.reply(`Assalom aleykum  <b>${first_name || last_name}</b>`, {
      reply_markup: {
        remove_keyboard: true,
      },
      parse_mode: "HTML",
    });
    await ctx.reply(
      `🤖Botga istalgan matningizni yuboring. <b>Lotin - Кирил, Кирил - Lotin</b> o'girib beraman 😉`,
      {
        parse_mode: "HTML",
      }
    );

    const findUser = await usersModel.find({ user_id });
    if (findUser.length < 1) {
      const newUser = await usersModel.create({
        first_name,
        last_name,
        username,
        user_id,
      });
      ctx.api.sendMessage(
        "@adsgasdh",
        `#new_user\n\n    First Name: <b>${newUser.first_name}</b>\n    Last Name: <b>${newUser.last_name}</b>\n👤Username: <b>${newUser.username}</b>\n🗿User_id: <tg-spoiler>${newUser.user_id}</tg-spoiler>`,
        {
          parse_mode: "HTML",
        }
      );
      ctx.session.step = "text";
    }
    ctx.session.step = "text";
  } catch (error) {
    ctx.session.step = "start";
    console.log(error);
  }
});

const text = router.route("text");
text.on(":text", async (ctx) => {
  try {
    const text = ctx.message.text;
    const first_name = ctx.from?.first_name || "";
    const last_name = ctx.from?.last_name || "";
    const user_id = ctx.from.id;
    const chatId = ctx.chat.id;
    const username = ctx.from?.username || "";

    const msg = await translateCT(text);
    const message = await messagesModel.create({
      first_name,
      username,
      last_name,
      user_id,
      from_msg: text,
      trans_msg: msg,
    });
    ctx.api.sendMessage(
      "@adsgasdh",
      `#convert_message\n\n    First Name: <b>${first_name}</b>\n    Last Name: <b>${last_name}</b>\n👤Username: <b>${username}</b>\n🗿User_id: <tg-spoiler>${user_id}</tg-spoiler>\n\n<b>Message:<b>\n${text}</b>\n\nConvert-message:</b>\n${message.trans_msg}`,
      {
        parse_mode: "HTML",
      }
    );
    await ctx.api.sendMessage(chatId, message.trans_msg);
    ctx.session.step = "text";
  } catch (error) {
    ctx.session.step = "start";
    console.log(error);
  }
});

bot.command("count", async (ctx) => {
  try {
    const chatId = ctx.chat.id;
    const user_id = ctx.from.id;
    if (user_id == 5634162263 || user_id == 0) {
      const messageCount = await messagesModel.count();
      const userCount = await usersModel.count();

      const counter = `📝All messages: ${messageCount}\n\n👥Users: ${userCount}`;

      await ctx.api.sendMessage(chatId, counter);
    } else {
      ctx.reply("/count commanddasini ko'rish uchun sizda ruxsat yo'q😔");
      ctx.session.step = "text";
    }
  } catch (error) {
    ctx.session.step = "start";
    console.log(error);
  }
});

bot.command("info", (ctx) => {
  try {
    const copymsg = 20;
    const chatId = ctx.chat.id;
    const from_chat_id = -1001975830564;
    ctx.api.copyMessage(chatId, from_chat_id, copymsg);
    ctx.session.step = "text";
  } catch (error) {
    ctx.session.step = "start";
    console.log(error);
  }
});

bot.command("dev", (ctx) => {
  try {
    const copymsg = 21;
    const chatId = ctx.chat.id;
    const from_chat_id = -1001975830564;
    ctx.api.copyMessage(chatId, from_chat_id, copymsg);
    ctx.session.step = "text";
  } catch (error) {
    ctx.session.step = "start";
    console.log(error);
  }
});

module.exports = router;

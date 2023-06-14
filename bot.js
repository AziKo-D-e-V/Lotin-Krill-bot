const { Bot, Keyboard } = require("grammy");
const translateCT = require("./convert");

const bot = new Bot("6156655296:AAFd5XiyM9kTGmwKAgqfYIBO0YRCcUL9TBw");

bot.command("start", async (ctx) => {
  ctx.reply(`Hello  ${ctx.from.first_name}`, {
    reply_markup: {
      remote_keyboard: true,
    },
    reply_markup: new Keyboard().text("♻️converter♻️").resized(),
  });
  ctx.reply(
    "This command is convert your words Cyrillic to Latin or Latin to Cyrillic words"
  );
});
bot.hears("♻️converter♻️", async (ctx) => {
  await ctx.reply("Please send me words", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
});

bot.on("message", async (ctx) => {
const chatId = ctx.chat.id;
const username = ctx.chat.username;
const name = ctx.chat.first_name;
    
  const text = ctx.message.text;
  const something = await translateCT(text);
  await ctx.api.sendMessage(chatId, something);
});

bot.start();

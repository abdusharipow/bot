import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7851844004:AAGdHcrJpPKAYPdqlXIoDk9XqJhcJd1Odz4"

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on("message", function (msg) {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Salom");   
})
console.log("Bot ishga tushdi...");

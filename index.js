import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7851844004:AAGdHcrJpPKAYPdqlXIoDk9XqJhcJd1Odz4"

const bot = new TelegramBot(TOKEN, { polling: true });
const lamboPhotoURL = "./images/lamborghini_urus..webp"

bot.on("message", async function  (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🥩" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    const xabar = await  bot.sendMessage(chatId, "Iltimos kuting...");
    setTimeout(function() {
      bot.deleteMessage(chatId,xabar.message_id)
    bot.sendPhoto(chatId, lamboPhotoURL, {
      caption: `Lamborghini Urus** is a luxury SUV made by the Italian company Lamborghini. It was first introduced in 2018. The car has a 4.0-liter twin-turbo V8 engine that produces around 650 horsepower. It can go from 0 to 100 km/h in about 3.6 seconds and reach a top speed of 305 km/h. The Urus has an all-wheel-drive system and combines the power of a sports car with the comfort of an SUV. Its price starts at around $230,000.
`
    } )
   
    },1000)

   
  } else if (text == "Menu 🥩") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz....");
  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz ....");
  } else {
    bot.sendMessage(chatId, "❗️ Xatolik, iltimos /start tugmasini bosing... ");
  }
});


console.log("Bot ishga tushdi  ");

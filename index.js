import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7851844004:AAGdHcrJpPKAYPdqlXIoDk9XqJhcJd1Odz4"

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on("message", function (msg) {
    const chatId = msg.chat.id;
    const firstname = msg.chat.first_name;
    if(text == "/start") {
            bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`,{
        reply_markup: {
            keyboard: [
                [{text: "Boshlash 🔥"}],
                [{text: "Menu 🥩 "} , { text: "Sozlamalar ⚙️ "}]
            ],
            resize_keyboard: true
        }
    }
        
    );  
 
    }   else if (text == "Boshlash 🔥") {
        bot.sendMessage(chatId, "Boshlanyaptii....")
    }  else if (text == "Menu 🥩 ") {
        bot.sendMessage(chatId, "Menuga hush kelipsiz....")
    }  else if (text == " Sozlamalar ⚙️") {
        bot.sendMessage(chatId, "Sozlamalar ...")
    }


    })
console.log("Bot ishga tushdi...");

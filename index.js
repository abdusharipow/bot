import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7851844004:AAGdHcrJpPKAYPdqlXIoDk9XqJhcJd1Odz4"

const bot = new TelegramBot(TOKEN, { polling: true });
const lamboPhotoURL = "./images/lamborghini_urus..webp"
const photo = "./images/images.jpg"
const photo1 = "./images/images.webp"
const foodphoto = "./images/download.jpg"
const foodphoto1 = "./images/lavash.jpg"
const foodphoto2 = "./images/download(1).jpg"
const foodphoto3 = "./images/download(4).jpg"
const foodphoto4 = "./images/download(2).jpg"
const foodphoto5 = "./images/download(3).jpg"

bot.on("message", async function (msg) {
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
    const xabar = await bot.sendMessage(chatId, "Iltimos kuting....");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);

      bot.sendPhoto(chatId, lamboPhotoURL, {
        caption: `
        🦅 Lamborghini Urus
The Lamborghini Urus is the ultimate Super SUV — a fusion of luxury, power, and speed. 💨With a 650 HP twin-turbo V8, it sprints from 0–100 km/h in just 3.6s while keeping you in pure comfort and style. 🏁🔥
        `,
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Rasmlar", callback_data: "photos" },
              { text: "Batafsil", callback_data: "info" },
            ],
            [{ text: "Sotib olish", callback_data: "buy" }],
          ],
        },
      });
    }, 1000);
  } else if (text == "Menu 🥩") {
    const xabar1 = await bot.sendMessage(chatId, "Iltimos kuting...");
    setTimeout(function () {
      bot.deleteMessage(chatId,xabar1.message_id);
      bot.sendPhoto(chatId,  photo , {
        caption: `Menyuga Xush kelipsiz!`,
        reply_markup: {
          inline_keyboard:[ 
            [
              {text: "Ovqatlar 🍽", callback_data: "foods"}, 
              {text: "Ichimliklar 🍷", callback_data: "drinks"}
          ] 
        ]
        } 
      } )
    },1000 )
  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz ⚙️....");
  }   else {
    bot.sendMessage(chatId, "❗️ Xatolik, iltimos /start tugmasini bosing... ");
  }
});

bot.on("callback_query", function (query) {
  const chatId = query.message.chat.id;
  const firstName = query.message.chat.first_name;
  const data = query.data;
  
  console.log(`chatId: ${chatId} ==> data: ${data}`);
  if (data == "photos") {
    bot.sendMessage(chatId, "Rasmlar");
  } else if (data == "info") {
    bot.sendMessage(chatId, "Batafsil ma'lumot");
  } else if (data == "buy") {
    bot.sendMessage(
      chatId,
      `Hurmatli ${firstName},
Siz lamborghini Urus sotib olish uchun tolov qildingizmi?
    `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Tasdiqlash ✅", callback_data: "yes_lambo" },
              { text: "Bekor qilish ❌", callback_data: "cancel_lambo" },
            ],
          ],
        },
      }
    );
  } else if (data == "yes_lambo") {
    bot.sendMessage(
      chatId,
      `Tabriklaymiz ${firstName}, siz Lamborghini sotib oldingiz! 🎉`
    );
  }  else if (data == "cancel_lambo") {
    bot.sendMessage(chatId, `Buyurtma muvaffaqiyatli bekor qilindi! ❌`);
  } else if (data == "foods") {
    bot.sendPhoto(chatId,photo1, {
      caption:`Tanlang!`,
      reply_markup: {
        inline_keyboard: [
          [
            {text: "Pitsa 🍕", callback_data: "info-pitsa"},
            {text: "Shaverma 🌯 ", callback_data: "info-shaverma"},
            {text: "Burger 🍔", callback_data: "info-burger"},
          ],
          [
            {text: "Hot-Dog 🌭", callback_data: "info-hot-dog"},
            {text: "Somsa 🥟", callback_data: "info-somsa"},
            {text: "Kabob 🍖 ", callback_data: "info-kabob"},
          ]
        ]
      }
    })
  } else if (data == "info-pitsa") {
    bot.sendPhoto(chatId, foodphoto,{
      caption:`Pitsa — bu italyan xalqining mashhur taomidir. U asosan yumshoq xamir, pomidor sousi va pishloqdan tayyorlanadi. Pitsa ustiga kolbasa, sabzavot, qo‘ziqorin, zaytun, dengiz mahsulotlari yoki boshqa masalliqlar qo‘shiladi`,
      reply_markup: {
        inline_keyboard:[
          [
            {text:"Sotib olish", callback_data: "buy1"}
          ]
        ]
      }
    })
  } else if (data == "buy1" ) {
    bot.sendMessage(chatId)
  }

  // console.log(query);
});


console.log("Bot ishga tushdi  ");

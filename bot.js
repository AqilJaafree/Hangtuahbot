const Telegraf = require("telegraf");
const axios = require("axios");

const bot = new Telegraf("5952399566:AAGjjMx7HdC4CSGPALCeHnUSzj8RQBAOAXQ");

bot.mention("hangNFT_bot", async (ctx) => {
  try {
    // Get the user's message
    const userMessage = ctx.message.text;
    const username = ctx.message.from.username; 
    const response = await axios.post(
      "https://khalil-himura-gmail-com-280-rasa.nous.mesolitica.com/webhooks/rest/webhook",
      {
        sender: "test_user",
        message: userMessage,
      }
    );

    let allText = "";

    for (const d of response.data) {
      if (d.text) {
        allText += `${d.text}`;
      }
    }

        ctx.reply(`@${username} ${allText || "No response from the API."}`);

  } catch (error) {
    let allText = "";
    ctx.reply(
      allText || "Error occurred, but no additional information available."
    );
  }
});

bot.launch();

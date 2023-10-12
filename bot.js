const  Telegraf  = require("telegraf");
// Import the axios module
const axios = require("axios"); 

const bot = new Telegraf("5952399566:AAGjjMx7HdC4CSGPALCeHnUSzj8RQBAOAXQ");
bot.mention("hangNFT_bot", (ctx) => {
  ctx.reply("Hello" + ctx.from.first_name);

  // Making the HTTP request to the provided API endpoint
  axios.post(
      "https://khalil-himura-gmail-com-280-rasa.nous.mesolitica.com/webhooks/rest/webhook",
      {
        sender: "test_user",
        message: "Hi there!",
      }
    )
    .then((response) => {
      console.log("API Response:", response.data);
      // Handle the API response here
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors here
    });
});


bot.launch();

const  Telegraf  = require("telegraf");

const bot = new Telegraf("5952399566:AAGjjMx7HdC4CSGPALCeHnUSzj8RQBAOAXQ");
bot.mention("hangNFT_bot", (ctx) => {
  ctx.reply("Hello" + ctx.from.first_name);
});


bot.launch();

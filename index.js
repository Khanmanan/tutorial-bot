
const mySecret = process.env['TOKEN']
require('dotenv').config();
const { addexp } = require("./handler/xp.js")
const discord = require("discord.js");
const client = new discord.Client({
    disableEveryone: true
});
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});
require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)
client.on("message", async message => {
if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message)
})

client.login(process.env.TOKEN);

 
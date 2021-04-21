
const mySecret = process.env['TOKEN']
require('dotenv').config();
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

client.login(process.env.TOKEN);

 
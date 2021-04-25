const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
category: "help",
    description: "The help command, what do you expect?",

       run: async (client, message, args) => {
    

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`;kick`', 'Kicks a member from your server via mention or ID')
        .addField('`;ban`', 'Bans a member from your server via mention or ID')
        .addField('`;purge`', 'Purges messages')
        .setTimestamp()
.setColor("00FFFF")
        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`;meme`', 'Generates a random meme')
        .addField('`;ascii`', 'Converts text into ascii')
        .setTimestamp()
.setColor('#0099ff')
        const info = new Discord.MessageEmbed()
        .setTitle('Info')
        .addField('`;Botinfo`', 'Get information about bot')
        .addField('`; serverinfo`', 'get information about server')
        .addField('`;ping`', 'Get the bot\'s API ping')

        .setTimestamp()
.setColor('#0099ff')
        const pages = [
                moderation,
                fun,
                info
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'discordo',
    description: 'DISCORDO!',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/512436958996332546/512454271367643140/tenor_4.gif');
        message.channel.send(attachment);
    },
};
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'top',
    description: 'gif TOP do choque de cultura',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/512436958996332546/512454445968261130/tenor_5.gif');
        message.channel.send(attachment);
    },
};
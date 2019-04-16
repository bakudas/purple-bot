const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'bakudance',
    description: 'BAKUDANCE SOVIET',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/354250290729582592/476405563601977370/bangief2.gif');
        message.channel.send(attachment);
    },
};
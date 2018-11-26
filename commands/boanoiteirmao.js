const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'boanoiteirmao',
    description: 'Boa noite irmão tudo de bom',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/392644060755787776/516435418972028935/300_pratas.mp3');
        message.channel.send(attachment);
    },
};
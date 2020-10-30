const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'superhot',
    description: 'SUPER HOTA',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/334713917907402763/771831434243080262/ja_foi_postado_5327155110480803495.mp3');
        message.channel.send(attachment);
    },
};
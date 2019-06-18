const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'krai',
    description: 'karai',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/414057506646786058/557373899898355722/krai.png');
        message.channel.send(attachment);
    },
};
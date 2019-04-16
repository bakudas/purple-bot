const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'feijao',
    description: 'não use esse comando',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/414057506646786058/562813987985817611/SPOILER_ulele2_1.gif');
        message.channel.send(attachment);
    },
};
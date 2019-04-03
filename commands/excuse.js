const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'excuse',
    description: 'excuse me',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/414057506646786058/562820814765031424/unknown_4.gif');
        message.channel.send(attachment);
    },
};
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'kek',
    description: 'KEK KEK KEK!',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/414057506646786058/557373676954058752/efekek.gif');
        message.channel.send(attachment);
    },
};
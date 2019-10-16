const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'aquaman',
    description: 'aquaman aquaman viado',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/378917417620865024/633999466512515076/unknown.png');
        message.channel.send(attachment);
    },
};
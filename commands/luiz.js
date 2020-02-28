const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'luiz',
    description: 'mood no trabalho do luiz',
    execute(message, args) {
        const attachment = new Attachment('https://imgur.com/89DjrE2.mp4');
        message.channel.send(attachment);
    },
};

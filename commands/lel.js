const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'lel',
    description: 'LEL!',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/388154650597261323/512640299739381795/unknown.png');
        message.channel.send(attachment);
    },
};
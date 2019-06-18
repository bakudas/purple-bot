const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'efe',
    description: 'contemplem o efe',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/354250290729582592/588184461548716061/IMG_20190611_225447.jpg');
        message.channel.send(attachment);
    },
};
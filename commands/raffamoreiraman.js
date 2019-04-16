const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'raffamoreiraman',
    description: 'YO raffa moreira man, YO!',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/414057506646786058/443162687032262656/raffamoreiraman2.gif');
        message.channel.send(attachment);
    },
};
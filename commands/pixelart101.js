const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'pixelart101',
    description: 'Dicas de como fazer uma pixelart mais bonita',
    execute(message, args) {
        const attachment = new Attachment('https://images-ext-1.discordapp.net/external/2OCVnbPRt8O0efORNpgMzRCPNBDi2yFqV7XYxQv6yB0/https/cdn.discordapp.com/attachments/414057506646786058/568511300351557657/unknown.png');
        message.channel.send(attachment);
    },
};
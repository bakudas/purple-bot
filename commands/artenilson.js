const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'artenilson',
    description: 'Grande momento do Artenilson',
    execute(message, args) {
        const attachment = new Attachment('https://images-ext-1.discordapp.net/external/npdVHmqF0dMWhtyYQ1358pLKf7YjkyU3vkdmpwT3B-U/https/media.discordapp.net/attachments/414057506646786058/561008753466540032/artenilson-unsmasked8.png');
        message.channel.send(attachment);
    },
};
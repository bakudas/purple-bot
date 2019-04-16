const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'babyelias',
    description: 'um peitão elias',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/414057506646786058/557374090369826836/babyelias.gif');
        message.channel.send(attachment);
    },
};
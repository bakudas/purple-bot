const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'olokinhomeu',
    description: 'OLOKINHO MEU..',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/526032077670580224/567507404841812000/olokinhomeu.mp3');
        message.channel.send(attachment);
    },
};
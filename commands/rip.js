const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'rip',
    description: 'RIP',
    execute(message, args) {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    },
};
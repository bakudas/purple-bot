const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'regras',
    description: 'Mostra as regras do servidor',
    execute(message, args) {
        const attachment = new Attachment('https://i.imgur.com/c7SYCmy.jpg');
        message.channel.send(attachment);
    },
};
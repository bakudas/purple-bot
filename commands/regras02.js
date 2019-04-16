const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'regras02',
    description: 'Mostra as regras extendidas do servidor',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/559746070221946891/561703774893113344/FB_IMG_1553990990334.jpg');
        message.channel.send(attachment);
    },
};
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'bakratos',
    description: 'bakratos',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/333437434903658517/521146242483617812/Bakratos.png');
        message.channel.send(attachment);
    },
};
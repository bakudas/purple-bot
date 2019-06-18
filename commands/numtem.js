const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'numtem',
    description: 'NUM TEM',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/333437434903658517/590228896033669131/unknown.png');
        message.channel.send(attachment);
    },
};
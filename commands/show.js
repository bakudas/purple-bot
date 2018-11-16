const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'show',
    description: 'Show choque de cultura gif SHOW',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/512436958996332546/512453787172995092/tenor_2.gif');
        message.channel.send(attachment);
    },
};
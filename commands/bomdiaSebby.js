const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'bomdiasebby',
    description: 'buon giorno',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/334713917907402763/590535883355324416/bomdiaSebby.mp3');
        message.channel.send(attachment);
    },
};
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'essabarra',
    description: 'essa barra',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/414057506646786058/557725606947848193/essabarra.mp3');
        message.channel.send(attachment);
    },
};
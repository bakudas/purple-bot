const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'feijao',
    description: 'não use esse comando',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/334713917907402763/562696181403090947/SPOILER_feijao.png');
        message.channel.send(attachment);
    },
};
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'bigbunda',
    description: 'BIGBUNDA',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/378917417620865024/446050831674900510/bundifa.gif');
        message.channel.send(attachment);
    },
};
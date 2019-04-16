const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'lul',
    description: 'LUL LUL LUL!',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/388154650597261323/512640335407480862/unknown.png');
        message.channel.send(attachment);
    },
};
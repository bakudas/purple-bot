const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'concordo',
    description: 'gif concordo com o palestrinha do choque de cultura',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/388154650597261323/512640299739381795/unknown.png');
        message.channel.send(attachment);
    },
};
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'concordo',
    description: 'gif concordo com o palestrinha do choque de cultura',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/334713917907402763/513743440731963443/tenor_3.gif');
        message.channel.send(attachment);
    },
};
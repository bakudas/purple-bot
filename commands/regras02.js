const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'regras02',
    description: 'Mostra as regras extendidas do servidor',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/333437434903658517/590588997315592212/role.png');
        message.channel.send(attachment);
    },
};
const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'mucei',
    description: 'MUÇEI TOU DE BUXIM CHEI',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/414057506646786058/562465161923788808/unknown.png');
        message.channel.send(attachment);
    },
};
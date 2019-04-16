const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'meudeus',
    description: 'meu. Deus',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/414057506646786058/562810640641818625/6_anos.png');
        message.channel.send(attachment);
    },
};
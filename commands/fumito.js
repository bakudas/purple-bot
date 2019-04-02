const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'fumito',
    description: 'Fumito Ueda real',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/414057506646786058/562430025106849822/unknown.png');
        message.channel.send(attachment);
    },
};
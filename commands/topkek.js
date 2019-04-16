const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'topkek',
    description: 'Top Kek!',
    execute(message, args) {
        const attachment = new Attachment('https://media.discordapp.net/attachments/333437434903658517/562689605309300777/topkek.png');
        message.channel.send(attachment);
    },
};
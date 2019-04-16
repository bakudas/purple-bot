const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'tucurte',
    description: 'vc parece q curte..',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/414057506646786058/562813223997407232/10612796_10152409076368506_2432161027676750031_n.jpg');
        message.channel.send(attachment);
    },
};
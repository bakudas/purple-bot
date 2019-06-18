const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'boungiorno',
    description: 'Bom dia Sebby',
    execute(message, args) {
        const attachment = new Attachment('https://66.media.tumblr.com/143601492022403f732a1c1ea04739d0/tumblr_pg4wfnjwsP1tqvsfso1_400.gif');
        message.channel.send(attachment);
    },
};
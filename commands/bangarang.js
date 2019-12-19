const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'bangarang',
    description: 'Video epico do voice',
    execute(message, args) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/388154650597261323/652533457158668318/bangaranggirl.mp4');
        message.channel.send(attachment);
    },
};

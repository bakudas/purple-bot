const { Client, Attachment } = require('discord.js');

module.exports = {
    name: 'vacalinda',
    description: 'A vaca é muito carinhosa, mas as vezes vaidoza',
    execute(message, args) {
        if (randomMsg === 0) {
            // Create the attachment using Attachment
            message.channel.send("lindx é você!")
            randomMsg = Math.round(Math.random());
        } else if (randomMsg === 1) { 
            const attachment = new Attachment('https://media.discordapp.net/attachments/337081459577978881/370714930040799233/tenor2.gif');
            message.channel.send(attachment);
            randomMsg = Math.round(Math.random());
        }
    },
};

let randomMsg = 0; // var para 'randomizar' as mensagens da vaca
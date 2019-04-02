const Discord = require('discord.js');

module.exports = {
    name: 'colorswipe',
    description: 'Jogo Color Swipe, criado pelo Sofá',
    execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Color Swipe Plus')
        .setURL('https://play.google.com/store/apps/details?id=com.frogmenstudios.colorswipeplus')
        .setAuthor('Sofá', 'https://images-ext-2.discordapp.net/external/APC07eJBUU1oOJVClwJc_r4lahKlFg93QcvgZjd4bjk/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/287329456371007489/f34975c5e4d13c272685f0251ff63042.png', 'https://twitter.com/_sofarama')
        .setDescription('Swipe in the direction of background color. Normal mode for kill time. Hard mode for a lot of colors. Light mode for those who like a real challenge.Good luck!')
        .setThumbnail('https://media.discordapp.net/attachments/334713917907402763/539581644940640256/unknown.png')
        .addBlankField()
        .addField('Android', 'https://play.google.com/store/apps/details?id=com.frogmenstudios.colorswipeplus', true)
        .setImage('https://media.discordapp.net/attachments/334713917907402763/539581866156752896/unknown.png')
        .setTimestamp()
        .setFooter('Um jogo criado pelo Sofá', 'https://images-ext-2.discordapp.net/external/APC07eJBUU1oOJVClwJc_r4lahKlFg93QcvgZjd4bjk/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/287329456371007489/f34975c5e4d13c272685f0251ff63042.png');

        message.channel.send(exampleEmbed);
    },
};

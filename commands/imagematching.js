const Discord = require('discord.js');

module.exports = {
    name: 'imagematching',
    description: 'Jogo Image Matching, criado pelo Redemptor',
    execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Image Matching')
        .setURL('https://redemptor.itch.io/image-matching')
        .setAuthor('Redemptor', 'https://cdn.discordapp.com/avatars/347066483261833238/7cb4f45a3079287f75cb735ca75f9cf4.png', 'https://twitter.com/xredemptor')
        .setDescription('Chame a família, os amigos e teste seu cérebro com esse divertido jogo da memoria. Além de lindas imagens, diversos níveis de dificuldades o jogo ainda conta com multiplayer local para até 4 jogadores.')
        .setThumbnail('https://media.discordapp.net/attachments/334713917907402763/515916487140311052/unknown.png')
        .addBlankField()
        .addField('Web', 'https://redemptor.itch.io/image-matching', true)
        .addField('Android', 'https://play.google.com/store/apps/details?id=com.raphael.ImageMatching', true)
        .addField('Win 8/Win 10/WinPhone', 'https://www.microsoft.com/store/apps/9NBLGGH4XMTX', true)
        .setImage('https://media.discordapp.net/attachments/496743144054980608/514789886666997761/AwJHIz.jpg?width=1026&height=376')
        .setTimestamp()
        .setFooter('Um jogo feito pelo Redemptor', 'https://cdn.discordapp.com/avatars/347066483261833238/7cb4f45a3079287f75cb735ca75f9cf4.png');

        message.channel.send(exampleEmbed);
    },
};

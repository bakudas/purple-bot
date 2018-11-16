const Discord = require('discord.js');

module.exports = {
    name: 'dandy',
    description: 'Jogo Dandy & Randy, criado pelo Yin',
    execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Dandy and Randy')
        .setURL('https://store.steampowered.com/app/959130/Dandy__Randy/')
        .setAuthor('Yin', 'https://images-ext-1.discordapp.net/external/mcJYRwBpJ-4xFFSjIrBACyJxGkpLDf-J0iNIvzaw5To/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/143454766121353216/bfe54e2db970ef3061b47f457980dc73.png', 'https://twitter.com/AndreYin')
        .setDescription('Dandy and Randy is a 2D top-down old-school arcade game featuring two of the worst archaeologists to ever grace the Earth. Help them in their adventures by finding treasure defeating enemies, fighting bosses and discovering secrets! Can they pay off their debts? It\'s up to you to find out!')
        .setThumbnail('https://pbs.twimg.com/profile_images/1048408177853812736/1VMCZay__400x400.jpg')
        .addBlankField()
        .addField('STEAM', 'https://store.steampowered.com/app/959130/Dandy__Randy/', true)
        .setImage('https://media.discordapp.net/attachments/496743144054980608/504345975834542111/unknown.png')
        .setTimestamp()
        .setFooter('Um jogo feito pelo Yin', 'https://images-ext-1.discordapp.net/external/mcJYRwBpJ-4xFFSjIrBACyJxGkpLDf-J0iNIvzaw5To/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/143454766121353216/bfe54e2db970ef3061b47f457980dc73.png');

        message.channel.send(exampleEmbed);
    },
};

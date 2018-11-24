const Discord = require('discord.js');

module.exports = {
    name: 'platformergun',
    description: 'Jogo Platformer Gun, criado pelo Daniel Dante',
    execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('The Platformer Gun')
        .setURL('https://store.steampowered.com/app/833540/The_Platformer_Gun/')
        .setAuthor('Daniel Dante', 'https://cdn.discordapp.com/attachments/334713917907402763/515919516073590785/unknown.png', 'https://twitter.com/DanielFelipePTA')
        .setDescription('The Platformer Gun são varias fases que você tem q passar podendo criar duas plataformas, uma solida porém imovel e uma movel porém não solida.')
        .setThumbnail('https://media.discordapp.net/attachments/334713917907402763/515920014386266112/unknown.png')
        .addBlankField()
        .addField('Steam', 'https://store.steampowered.com/app/833540/The_Platformer_Gun/', true)
        .setImage('https://media.discordapp.net/attachments/496743144054980608/496760770638512128/z6QwyS.png')
        .setTimestamp()
        .setFooter('Um jogo criado pelo Daniel Dante', 'https://cdn.discordapp.com/attachments/334713917907402763/515919516073590785/unknown.png');

        message.channel.send(exampleEmbed);
    },
};

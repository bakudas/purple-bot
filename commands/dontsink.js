const Discord = require('discord.js');

module.exports = {
    name: 'dontsink',
    description: 'Jogo Don\'t Sink, criado pelo Thirteen',
    execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Don\'t Sink')
        .setURL('https://store.steampowered.com/app/710610/Dont_Sink/')
        .setAuthor('Thirteen', 'https://media.discordapp.net/attachments/334713917907402763/515921640098627595/unknown.png', 'https://twitter.com/i_am_thirteen')
        .setDescription('Um RPG-Sandbox-Pirata de Aventura, que se inspira em Piratas do Caribe (o videogame de 2003), FTL: Faster Than Light e Sid Meier\'s Pirates.')
        .setThumbnail('https://media.discordapp.net/attachments/334713917907402763/515922029854326784/unknown.png')
        .addBlankField()
        .addField('Steam', 'https://store.steampowered.com/app/710610/Dont_Sink/', true)
        .addField('Xbox', 'https://www.microsoft.com/pt-br/p/dont-sink/9pjgtbk7p7fs', true)
        .setImage('https://media.discordapp.net/attachments/496743144054980608/496872685725286410/Box-Art.png')
        .setTimestamp()
        .setFooter('Um jogo criado pela diva Thirteen', 'https://media.discordapp.net/attachments/334713917907402763/515921640098627595/unknown.png');

        message.channel.send(exampleEmbed);
    },
};

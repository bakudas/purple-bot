const Discord = require('discord.js');

module.exports = {
    name: 'drawmypath',
    description: 'Jogo Draw my Path, criado pelo maravilhoso Sebby',
    execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Draw my Path')
        .setURL('https://play.google.com/store/apps/details?id=com.tatualado.drawmypath')
        .setAuthor('Sebby Delícia', 'https://images-ext-1.discordapp.net/external/yR3yyN3CPOQkTUcC_2vHDWIh2cubBchNdfLTCO5uE9E/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/347102710132375562/d22fe517ef83fd703cd7ee45612cd735.png', 'https://twitter.com/SebastianSantus')
        .setDescription('Draw My Path. O objetivo do jogo é ajudar o sebbynho a chegar na bandeira, você risca na tela para não deixar o personagem morrer. Detalhe o jogo conta com o sistema de Cabra point para salvar sua posição caso morra. ')
        .setThumbnail('https://media.discordapp.net/attachments/334713917907402763/515917724199944204/unknown.png')
        .addBlankField()
        .addField('Android', 'https://play.google.com/store/apps/details?id=com.tatualado.drawmypath', true)
        .addField('IOS', 'https://itunes.apple.com/us/app/draw-my-path/id1324169033?l=pt&ls=1&mt=8', true)
        .setImage('https://media.discordapp.net/attachments/334713917907402763/515917647888515076/unknown.png')
        .setTimestamp()
        .setFooter('Um jogo criado pelo maravilhoso Sebby', 'https://images-ext-1.discordapp.net/external/yR3yyN3CPOQkTUcC_2vHDWIh2cubBchNdfLTCO5uE9E/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/347102710132375562/d22fe517ef83fd703cd7ee45612cd735.png');

        message.channel.send(exampleEmbed);
    },
};

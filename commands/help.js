const { prefix } = require('../config.json');
const { Client, Attachment } = require('discord.js');


module.exports = {
    name: 'help',
    description: 'Lista de comandos disponíveis',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Segue a lista de todos os meus comandos:');
            data.push(commands.map(command => command.name).join(' - '));
            data.push(`\nVocê pode usar \`${prefix}help [nome do comando]\` para ter mais infos sobre o comando em questão.`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    const attachment = new Attachment('https://cdn.discordapp.com/attachments/334713917907402763/513752341359362049/tenor_6.gif');
                    message.channel.send(attachment);
                    message.reply('te mandei uma DM com todos os meus comandos disponíveis! (: ');
                })
                .catch(error => {
                    console.error(`Não foi possível mandar DM para ${message.author.tag}.\n`, error);
                    message.reply('Parace que suas DMs estão desativadas. Não consigo de mandar mensagem. :/ ');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Não é um comando válido');
        }

        data.push(`**Nome:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Descrição:** ${command.description}`);
        if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Tempo de espera:** ${command.cooldown || 3} segundo(s)`);

        message.channel.send(data, { split: true });
    },
};
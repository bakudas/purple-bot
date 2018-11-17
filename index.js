const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { Client, Attachment } = require('discord.js');

const client = new Discord.Client({autoReconnect:true});
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// log in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `Você deveria digitar algum parâmetro, ${message.author}!`;

        if (command.usage) {
            reply += `\nUso apropriado: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('hmmm, o comando parece estar errado..');
    }
});

// token login
client.login(token);
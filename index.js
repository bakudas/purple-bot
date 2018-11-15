const Discord = require('discord.js');
const client = new Discord.Client();

// log in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// mensagem de test
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

// token login
client.login('NTEyNDE1MTA0NDMyODY1Mjgw.Ds5HpA.u5LLxjCn00pXpTaDhFHzAyuv_Vo');
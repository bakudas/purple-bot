const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { Client, Attachment } = require('discord.js');

const client = new Discord.Client();
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
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('hmmm, o comando parece estar errado..');
    }
});

// // mensagem de test
// client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//   }
//   else if (msg.content === 'beep'){
//       msg.reply('boop');
//   }
// });

// client.on('message', message => {
//     // If the message is '!rip'
//     if (message.content === `${prefix}rip`) {
//         // Create the attachment using Attachment
//         const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
//         // Send the attachment in the message channel
//         message.channel.send(attachment);
//     }
// }); 
    
// // VACA LINDA
// let randomMsg = 0; // var para 'randomizar' as mensagens da vaca
// client.on('message', message => {
//     // If the message is '!regras'
//     if (message.content === `${prefix}vacalinda`) {
//         if (randomMsg === 0) {
//             // Create the attachment using Attachment
//             message.channel.send("lindx é você!")
//             randomMsg = Math.round(Math.random());
//         } else if (randomMsg === 1) { 
//             const attachment = new Attachment('https://media.discordapp.net/attachments/337081459577978881/370714930040799233/tenor2.gif');
//             message.channel.send(attachment);
//             randomMsg = Math.round(Math.random());
//         }
//     } 
// });

// //PIXEL DAYLIES BAKUDAS
// var videos = ["https://www.youtube.com/watch?v=2qYprQwfvYI","https://www.youtube.com/watch?v=fw7VZiedny8","https://www.youtube.com/watch?v=L1uVrUCcMYc","https://www.youtube.com/watch?v=7d7Q8S91jmw","https://www.youtube.com/watch?v=seFWi3oO6n8","https://www.youtube.com/watch?v=DefoA50i15w","https://www.youtube.com/watch?v=duquEtbLC4I","https://www.youtube.com/watch?v=IPKHPxhTeyA","https://www.youtube.com/watch?v=E9uCHPZ6unw","https://www.youtube.com/watch?v=nIQMZTnhz_4","https://www.youtube.com/watch?v=IUJTDp7n3nM","https://www.youtube.com/watch?v=QlOfHx_mF4w","https://www.youtube.com/watch?v=5gR4HKoM-0M","https://www.youtube.com/watch?v=dVSg2kpnTg0","https://www.youtube.com/watch?v=46zW88Cj0yc","https://www.youtube.com/watch?v=-wu6ol4WWww","https://www.youtube.com/watch?v=n_ubfPB-Mg4","https://www.youtube.com/watch?v=t-hLJkhe3v4","https://www.youtube.com/watch?v=hsPuk0I3rKc","https://www.youtube.com/watch?v=4aZBqJIBq5I","https://www.youtube.com/watch?v=R8zxD9-kFss","https://www.youtube.com/watch?v=ctov-N9Yq9c","https://www.youtube.com/watch?v=0sAdQwZ8WzQ","https://www.youtube.com/watch?v=locSdNHBMnU","https://www.youtube.com/watch?v=sBBRACslHns","https://www.youtube.com/watch?v=Nvxb4-S81cQ","https://www.youtube.com/watch?v=qI2Y1z1wThg","https://www.youtube.com/watch?v=Gh0ioUPz1pw","https://www.youtube.com/watch?v=4cEf5hYt4cQ","https://www.youtube.com/watch?v=XLqocGDLpVk","https://www.youtube.com/watch?v=mYaD8r6E3L0","https://www.youtube.com/watch?v=4XClnvCBnRU","https://www.youtube.com/watch?v=MFpWEk8Aut8","https://www.youtube.com/watch?v=CW1xIgnECP0","https://www.youtube.com/watch?v=3bsM7HUujfU","https://www.youtube.com/watch?v=NNVqLOhaJXI","https://www.youtube.com/watch?v=DUPI9hM4UGU","https://www.youtube.com/watch?v=WnB5kB-FdQw","https://www.youtube.com/watch?v=u5Bu9xRIZ7Q","https://www.youtube.com/watch?v=o5FoIKQG_0E","https://www.youtube.com/watch?v=_E-AKdmb25E","https://www.youtube.com/watch?v=tSHb-lsMpCg","https://www.youtube.com/watch?v=bCAeYRROLbw","https://www.youtube.com/watch?v=c9V8gBSIjyM","https://www.youtube.com/watch?v=076gAckTzms","https://www.youtube.com/watch?v=iySKJZVoB3k","https://www.youtube.com/watch?v=xN7X1zt4GXA","https://www.youtube.com/watch?v=673uhY2va6I","https://www.youtube.com/watch?v=a8vZXEV3kKk","https://www.youtube.com/watch?v=0eRAJ2dK4bw","https://www.youtube.com/watch?v=JDB5SsbEsPw","https://www.youtube.com/watch?v=XqVku3MTLDo","https://www.youtube.com/watch?v=m13qlkwRk9I","https://www.youtube.com/watch?v=s3cexCHWoso","https://www.youtube.com/watch?v=tF-ZEUw7zik","https://www.youtube.com/watch?v=vY-5UnxQXKo","https://www.youtube.com/watch?v=GExZTbtVBRQ","https://www.youtube.com/watch?v=CU0Ta7gwj9s","https://www.youtube.com/watch?v=zWIMkSrgjpE","https://www.youtube.com/watch?v=XRShcCzvZ2w","https://www.youtube.com/watch?v=HgYDCxt52wQ","https://www.youtube.com/watch?v=u6EHVM8CT6A","https://www.youtube.com/watch?v=AZ4oWNHJm2M","https://www.youtube.com/watch?v=dkgosSDi2_E","https://www.youtube.com/watch?v=QHh_bwyt_VQ","https://www.youtube.com/watch?v=R_MrWB0_c1U","https://www.youtube.com/watch?v=CJcXcJSAJ44","https://www.youtube.com/watch?v=Nq7mJM2L7PA","https://www.youtube.com/watch?v=ZxsJwOV2D7Y","https://www.youtube.com/watch?v=SE8EezHGkVI","https://www.youtube.com/watch?v=qRgZVwzef4Y","https://www.youtube.com/watch?v=tHErjKVo1iM","https://www.youtube.com/watch?v=Dn1OH5USq8w","https://www.youtube.com/watch?v=OxXILTmywBI","https://www.youtube.com/watch?v=IQD7MrQTNmI","https://www.youtube.com/watch?v=RyNFHCu_a3I","https://www.youtube.com/watch?v=3v7b2-Fz0QU","https://www.youtube.com/watch?v=o3DdKWGhs7A","https://www.youtube.com/watch?v=6anBXexp-AY","https://www.youtube.com/watch?v=3ADjCeXl2K8","https://www.youtube.com/watch?v=WB8IQ1dlER4","https://www.youtube.com/watch?v=qukFQVXaUnU","https://www.youtube.com/watch?v=Rj9lbcQbnXE","https://www.youtube.com/watch?v=3Sf9iMWiiz0","https://www.youtube.com/watch?v=ILmJ-Sm23LA","https://www.youtube.com/watch?v=0caWvrV5eSM","https://www.youtube.com/watch?v=SmUm7IkZTVE","https://www.youtube.com/watch?v=tbHWw__1dOo","https://www.youtube.com/watch?v=pRsKNFSTLSc","https://www.youtube.com/watch?v=JwNqSxOZt-A","https://www.youtube.com/watch?v=M975yK1Qw10","https://www.youtube.com/watch?v=nQhb7my4LWs","https://www.youtube.com/watch?v=d37ZbDsnCFw","https://www.youtube.com/watch?v=r3AnaMxP6Es","https://www.youtube.com/watch?v=G9VaVeEu-eg","https://www.youtube.com/watch?v=UHUc_D9fCNY","https://www.youtube.com/watch?v=1ZjpBAgTpJ4","https://www.youtube.com/watch?v=xQtkzHCXEeI","https://www.youtube.com/watch?v=J-pmXpVQa1M","https://www.youtube.com/watch?v=L7kxSXFADU0","https://www.youtube.com/watch?v=ameljJz2SgI","https://www.youtube.com/watch?v=2jZhFEwKQMw","https://www.youtube.com/watch?v=9F5eF7DLCVI","https://www.youtube.com/watch?v=3cLaepR8OxQ","https://www.youtube.com/watch?v=2CCfmws1EvI","https://www.youtube.com/watch?v=1yjaDpKmKXQ","https://www.youtube.com/watch?v=2K-NJS82Z8k","https://www.youtube.com/watch?v=BAkrOB25Ij0","https://www.youtube.com/watch?v=4z6lvfzbKbI","https://www.youtube.com/watch?v=vzVcvXmkuHs","https://www.youtube.com/watch?v=R2DoTffhq_c","https://www.youtube.com/watch?v=QWC5n5Whk-I","https://www.youtube.com/watch?v=WlGzH6vFf-M","https://www.youtube.com/watch?v=nLeg_PhWryI","https://www.youtube.com/watch?v=yDbHI7Oqvtg","https://www.youtube.com/watch?v=xTAeBS25nQ4"];
// client.on('message', message => {
//     if (message.content === `${prefix}bakudas`) 
//     {
//         var rvideo = getRandomInt(0, videos.length-1);
//         if (message.channel == null) {
//             console.log("Não encontrei canal")
//           } else {
//             message.channel.sendMessage(videos[rvideo]);
//         }
//     } 
// });

// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;
    
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
    
//     if (command === 'args-info') {
//         if (!args.length) {
//             return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
//         }
//         else if (args[0] === 'foo') {
//             return message.channel.send('bar');
//         }
    
//         message.channel.send(`Command name: ${command}\nArguments: ${args}`);
//     }
//     else if (command === 'avatar') {
//         if (!message.mentions.users.size) {
//             return message.channel.send(`Seu avi: ${message.author.displayAvatarURL}`);
//         }
    
//         const avatarList = message.mentions.users.map(user => {
//             return `${user.username}'s avatar: ${user.displayAvatarURL}`;
//         });
    
//         // send the entire array of strings as a message
//         // by default, discord.js will `.join()` the array with `\n`
//         message.channel.send(avatarList);
//     }
//     else if (message.content == `${prefix}show`) {
//         const attachment = new Attachment('https://media.discordapp.net/attachments/512436958996332546/512453787172995092/tenor_2.gif');
//         message.channel.send(attachment);
//     }
//     else if (message.content === `${prefix}regras`) {
//         const attachment = new Attachment('https://i.imgur.com/c7SYCmy.jpg');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}concordo`) {
//         const attachment = new Attachment('https://media.discordapp.net/attachments/512436958996332546/512454059635113995/tenor_3.gif');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}discordo`) {
//         const attachment = new Attachment('https://media.discordapp.net/attachments/512436958996332546/512454271367643140/tenor_4.gif');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}raffamoreiraman`) {
//         const attachment = new Attachment('https://media.discordapp.net/attachments/414057506646786058/443162687032262656/raffamoreiraman2.gif');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}top`) {
//         const attachment = new Attachment('https://media.discordapp.net/attachments/512436958996332546/512454445968261130/tenor_5.gif');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}bigbunda`) {
//         const attachment = new Attachment('https://cdn.discordapp.com/attachments/378917417620865024/446050831674900510/bundifa.gif');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}bakudance`) {
//         const attachment = new Attachment('https://cdn.discordapp.com/attachments/354250290729582592/476405563601977370/bangief2.gif');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}lel`) {
//         const attachment = new Attachment('https://media.discordapp.net/attachments/388154650597261323/512640299739381795/unknown.png');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}lul`) {
//         const attachment = new Attachment('https://media.discordapp.net/attachments/388154650597261323/512640335407480862/unknown.png');
//         message.channel.send(attachment);
//     }
//     else if (message.content == `${prefix}saidaquiseucachorro`) {
//         message.channel.send("https://youtu.be/MkRed9gokYM");
//     }
// });


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var cli = new Discord.Client({autoReconnect:true});
// token login
client.login(token);
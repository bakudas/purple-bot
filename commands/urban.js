const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports = {
    name: 'urban',
    description: 'Busca o significar no urbar dictionary',
    args: true,
    async execute(message, args) {
        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
          }
        
          const query = querystring.stringify({ term: args.join(' ') });

          const { body } = await fetch.get(`https://api.urbandictionary.com/v0/define${query}`).then(response => response.json());
  
          if (!body.list.length) {
              return message.channel.send(`No results found for **${args.join(' ')}**.`);
          }
  
          const [answer] = body.list;
  
          const embed = new Discord.RichEmbed()
              .setColor('#EFFF00')
              .setTitle(answer.word)
              .setURL(answer.permalink)
              .addField('Definition', trim(answer.definition, 1024))
              .addField('Example', trim(answer.example, 1024))
              .addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);
  
          message.channel.send(embed);
    },
};
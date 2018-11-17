const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports = {
    name: 'urban',
    description: 'Busca o significar no urbar dictionary',
    args: true,
    execute(message, args) {
        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
          }
        
        const query = querystring.stringify({ term: args.join(' ') });
        
        const { body } = fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
    },
};
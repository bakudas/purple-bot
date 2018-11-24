const fetch = require('node-fetch');

module.exports = {
    name: 'cat',
    description: 'retorna uma imagem aleatória de um gatinho',
    async execute( message, args) {
        const { body } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		message.channel.send(body.file);
    },
};
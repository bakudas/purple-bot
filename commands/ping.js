module.exports = {
    name: 'ping',
    description: 'Comando teste para ver se o bot tá up',
    execute(message, args) {
        message.channel.send('Pong.');
    },
};
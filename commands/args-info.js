module.exports = {
    name: 'args-info',
    description: 'Comando teste para lidar com argumentos.',
    args: true,
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === 'foo') {
            return message.channel.send(':poop:');
        }
    
        message.channel.send(`First argument: ${args[0]}`);
    },
};
module.exports = {
    name: 'd',
    description: 'Comando para rolar o dado com o número de lados escolhidos. e.g !d 20',
    args: true,
    execute(message, args) {
        let dice = {
            sides: args[0],
            roll: function () {
                let randomNumber = Math.floor(Math.random() * this.sides) + 1;
                return randomNumber;
            }
        }
        
        if (!args.length) {
            return message.channel.send(`Você precisa dizer quantos lados o dado tem, ${message.author}!`);
        }
        else if (args[0] === !null || !isNaN(args[0])) {
            let result = dice.roll();
            message.channel.send(`${message.author}:game_die:: ${result}`);
        }
        else if (isNaN(args[0])) {
            message.channel.send(`${message.author} você precisa passar o númedo de lados do dado`);
        }
        else if (args[0] === !null) {
            message.channel.send(`${message.author} você precisa passar o númedo de lados do dado`);
        }
    
        // message.channel.send(`rolou o dado com ${args[0]} lados`);
    },
};



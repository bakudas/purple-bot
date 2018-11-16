module.exports = {
    name: 'avatar',
    description: 'Mostra o avatar da @ citada, se não tiver @ mostra o próprio avatar',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Seu avi: ${message.author.displayAvatarURL}`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    },
};
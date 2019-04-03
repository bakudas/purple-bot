module.exports = {
    name: 'especialvoice',
    description: 'Manda um gif ou video aleatório com a assinatura do voice',
    execute(message, args) {
        var rvideo = getRandomInt(0, videos.length-1);
        if (message.channel == null) {
            console.log("Não encontrei canal")
          } else {
            message.channel.sendMessage(videos[rvideo]);
        }
    },
};

var videos = ["https://cdn.discordapp.com/attachments/414057506646786058/562812702855266304/e9a56762d7-1486792022561.gif","https://cdn.discordapp.com/attachments/414057506646786058/562812767783092244/fbf820b8fc-1486792792601.gif","https://cdn.discordapp.com/avatars/260557249049657346/2baaef39aed74a55abbfdb25e9b336d8.png","https://cdn.discordapp.com/attachments/414057506646786058/562813541024006165/garoto-escada-bug.gif","https://cdn.discordapp.com/attachments/414057506646786058/562813594518159390/5NFk.gif","https://www.youtube.com/watch?v=jgxeli4HOBE","https://cdn.discordapp.com/attachments/414057506646786058/562813750919430144/DistortedAcademicEmperorpenguin-size_restricted.gif","https://www.youtube.com/watch?v=S8_FpXzwqAg","https://www.youtube.com/watch?v=cB_AnteqNJ0","https://cdn.discordapp.com/attachments/414057506646786058/562814308216471578/12e.gif","https://www.youtube.com/watch?v=IBv1CRnySFw","https://cdn.discordapp.com/attachments/414057506646786058/562814421609611293/DistortedAcademicEmperorpenguin-size_restricted.gif","https://cdn.discordapp.com/attachments/414057506646786058/562814769963204608/tumblr_orr741DKqe1qauhyqo6_540.gif","https://www.youtube.com/watch?v=9Oa29ZbpyW8","https://cdn.discordapp.com/attachments/414057506646786058/562814963442515968/DistortedAcademicEmperorpenguin-size_restricted_2.gif","https://cdn.discordapp.com/attachments/414057506646786058/562816421256626196/14cUhIq.gif","https://cdn.discordapp.com/attachments/414057506646786058/562817025601437706/giphy6565.gif","https://cdn.discordapp.com/attachments/414057506646786058/562818735631630386/upm_5.gif"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
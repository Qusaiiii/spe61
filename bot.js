var ServerID = "496001281643773993";// اي دي الروم
var ChannelID = "510128205336805386";
var ServerIDD = "496001281643773993";
var ChannelIDD = "510128205336805386";

const Discord = require('discord.js');
const client = new Discord.Client();
const c = new Discord.Client();
const prefix = '!';

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});
client.on('message', message => {
     if (message.content === "!av-set") {
client.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
});

c.on('warn', console.warn);

c.on('error', console.error);



c.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

c.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

c.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    c.on('message', msg => {
        c.guilds.get(ServerIDD).channels.get(ChannelIDD).send(Math.random().toString(36).substring(7))


    });
}

c.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});
c.on('message', message => {
     if (message.content === "!av-set") {
c.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
});

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN); 
c.login(process.env.TOKEN);

var ServerID = "496001281643773993";// اي دي الروم
var ChannelID = "510128205336805386";
const Discord = require('discord.js');

const client = new Discord.Client();

const c = new Discord.Client();

const d = new Discord.Client(); 

const e = new Discord.Client();

const f = new Discord.Client();

const g = new Discord.Client();

const h = new Discord.Client();

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


function timerFuncc() {
    c.on('message', msg => {
        c.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


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

//============================================
d.on('warn', console.warn);

d.on('error', console.error);



d.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

d.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

d.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFuncd() {
    d.on('message', msg => {
        d.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

d.on('message', message => {

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
d.on('message', message => {
     if (message.content === "!av-set") {
d.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
});


//============================================
e.on('warn', console.warn);

e.on('error', console.error);



e.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

e.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

e.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunce() {
    e.on('message', msg => {
        e.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

e.on('message', message => {

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
e.on('message', message => {
     if (message.content === "!av-set") {
e.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
});

//============================================

f.on('warn', console.warn);

f.on('error', console.error);



f.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

f.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

f.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFuncf() {
    f.on('message', msg => {
        f.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

f.on('message', message => {

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
f.on('message', message => {
     if (message.content === "!av-set") {
f.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
});

//============================================

g.on('warn', console.warn);

g.on('error', console.error);



g.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

g.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

g.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFuncg() {
    g.on('message', msg => {
        g.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

g.on('message', message => {

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
g.on('message', message => {
     if (message.content === "!av-set") {
g.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
});


//============================================
h.on('warn', console.warn);

h.on('error', console.error);



h.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

h.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

h.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunch() {
    h.on('message', msg => {
        h.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

h.on('message', message => {

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
h.on('message', message => {
  if (message.content === "!av-set") {
h.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
});


//============================================
var timer = setTimeout(timerFunc, 1000);

var timer = setTimeout(timerFunce, 1000);

var timer = setTimeout(timerFuncc, 1000);

var timer = setTimeout(timerFunce, 1000);

var timer = setTimeout(timerFuncf, 1000);

var timer = setTimeout(timerFuncg, 1000);

var timer = setTimeout(timerFunch, 1000);

client.login(process.env.BOT_TOKEN); 

c.login(process.env.TOKENC);

d.login(process.env.TOKEND);

e.login(process.env.TOKENE);

f.login(process.env.TOKENF);

g.login(process.env.TOKENG);

h.login(process.env.TOKENH);



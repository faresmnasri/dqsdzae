const prefix ="*";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("Bot Online"); 
console.log("log");
});


client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose: MAR7BABIK FI SERVER FALLEGA TEAMM :rose: 
  :crown: MAR7BA SI  ${member}:crown:  
  :arrow_right:  YOU ARE THE MEMBER NUMBER :  ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

  
  client.login(process.env.BOT_TOKEN);

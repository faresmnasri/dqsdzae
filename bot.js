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

  
client.on('guildMemberAdd', Sal => {
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/529659606419374081/531406992909139968/1line.gif')
    .setTitle('عضو جديد!')
    .setDescription('MAR7BA BIK FI SERVER )
    .addField('``YOUR ID``:',"" +  Sal.user.id, true)
    .addField('``YOUR TAG``', Sal.user.discriminator, true)
    .addField('``YOU CREATED AT ``', Sal.user.createdAt, true)
    .addField(' 👤  YOU ARE THE MEMBER NUMBER',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('【welcome】', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });

  client.login(process.env.BOT_TOKEN);

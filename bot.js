const prefix ="*";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("Bot Online"); 
console.log("log");
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***:rose: THANKS FOR JOINING OUR SERVER:rose: :***" ,member.user.username )
    .setDescription('***:heart: HOPE YOU ENJOY IN FALLEGA TEAM ᴳᴬᴹᴵᴺᴳ SERVER:heart: : ***')
    .setColor('RANDOM')
    .setImage('https://cdn.pg.sa/OD53Wjr9p0.gif')
var channel =member.guild.channels.find('name', '【welcome】')
if (!channel) return;
channel.send({embed : embed});
});


client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose: MAR7BABIK FI SERVER FALLEGA TEAMM :rose: 
  :crown: MAR7BA SI  ${member}:crown:  
  :arrow_right:  YOU ARE THE MEMBER NUMBER :  ${member.guild.memberCount} `) 
  }).catch(console.error)
});
  

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`RABI M3AK ✋:skin-tone-1: 😔`)
    .setDescription(`ريح السد إيهز ما يرد ✋:skin-tone-1: 😔 `)
    .addField('MAZELOU FI SERVER 👤:',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`==== (っ◔◡◔)っ ♥ 𝐇𝐎𝐏𝐄 𝐘𝐎𝐔 𝐄𝐍𝐉𝐎𝐘 ♥ ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

var channel =member.guild.channels.find('name', '【welcome】')
if (!channel) return;
channel.send({embed : embed});
})

client.login(process.env.BOT_TOKEN);

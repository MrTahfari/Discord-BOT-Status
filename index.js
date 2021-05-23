let Discord = require("discord.js");
let client = new Discord.Client();
const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("Whatever you want to put here")
})

client.on("ready", () => {
 const activities = [
 `${client.guilds.cache.size} Servers`,
 `${client.users.cache.size} Users`,
 `${client.channels.cache.size} Channels`,
 `/activ` // i dont recommend adding more
 ];
 let i = 0;
 setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'LISTENING' }), 11000)
});


client.on("message", message => {

if (message.content === "ping") {
message.channel.send("pong!")
}
if(message.content === "embed") {
 let embed = new Discord.MessageEmbed()
 .setTitle("this is Emded title")
 .setDescription("this is Embed description")
 .setColor("RANDOM")
 .setFooter("This is embed footer")
 message.channel.send(embed)
}

})

client.login("ODQyOTE5OTQ3NjMzMDMzMjE3.YJ8UYA.IVg7TQ3g5f5twwdvs3wT5Qr545I")
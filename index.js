const array = []
const db = require(`quick.db`)
const map = new Map()
const Discord = require(`discord.js`)
const ms = require("ms")
var err;
const client = new Discord.Client({
    intents: 32767
})
class Bot {
    constructor (bot_name, bot_token, prefix) {
        if(!bot_name) {
            throw err = `Missing the bot name.`
        }
        if(!bot_token) {
            throw err = `Missing the bot token.`
        }
        if(!prefix) {
            throw err = `Missing the bot prefix.`
        }
        map.set(bot_name, {token: bot_token, prefix})
    }
    setCooldown(time, bot_name){
        if(!time){
            throw err = `Missing time.`
        }
        if(!bot_name) {
            throw err = `Missing bot name.`
        }
        map.set(`cooldown_${bot_name}`, time)
    }
        login(bot_name){
            if(!bot_name){
                throw err = `Enter the bot name to login.`
            }
const config = map.get(bot_name)
if(!config){
    throw err = `Bot name is incorrect.`
}
client.login(config.token)
client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(config.prefix)
        )
        return;

    const [cmd, ...args] = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/g);
      const check = await db.get(`cooldown_${message.author.id}`)
      var time;
      time = map.get(`cooldown_${bot_name}`)
      if(isNaN(time)) {
          time = ms(map.get(`cooldown_${bot_name}`))
      }
 const timeout = ms(time)
 if(check !== null && timeout - (Date.now() - check) > 0) {
 const timeLeft = ms(timeout - (Date.now() - check))
 message.channel.send(`**Cooldown**: \`${timeLeft}\``)
 } else {
    await db.set(`cooldown_${message.author.id}`, Date.now())
    const command = array.find(c => {
        if(c.name === cmd.toLowerCase()) {
            return c
        }
    })
    const command2 = array.find(c => {
        if(c.aliases?.includes(cmd.toLowerCase())){
            return c
        }
    })
    if(command) command.run({client, message, args, Discord}); else
    if(command2) command2.run({client, message, args, Discord}) 
 }
});
        }
        readyMessage(string){
       client.on(`ready`, () => {
           console.log(string)
       })
        }
}
  class Command {
    constructor(data) {
    array.push(data)
    return data;
  }
  }
  module.exports = {Command, Bot}
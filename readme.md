## discord.js-v13_handler
A discord.js handler v13, easy to use.

### Setup
```js
  const {Bot, Command} = require(`discord.js_handler`)
  const bot = new Bot("TEST", "YOUR_BOT_TOKEN", "YOUR_PREFIX")
  bot.login("TEST")
  bot.readyMessage("IM READY!")
  bot.setCooldown("10s", "TEST")
```
### Command run
```js
  new Command({
      name: "test",
      description: "a test",
      aliases: ["t"],
      run: ({message /*client, args, Discord*/}) => {
          message.reply(`Test!`)
      }
  })
  ```

### Full code
```js
  //setup
  const {Bot, Command} = require(`discord.js_handler`)
  const bot = new Bot("TEST", "YOUR_BOT_TOKEN", "YOUR_PREFIX")
  bot.login("TEST")
  bot.readyMessage("IM READY!")
  bot.setCooldown("10s", "TEST")

   //command
  new Command({
      name: "test",
      description: "a test",
      aliases: ["t"],
      run: ({message /*client, args, Discord*/}) => {
          message.reply(`Test!`)
      }
  })
  ```
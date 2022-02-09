const {MessageEmbed} = require('discord.js');

require("dotenv").config();
const grabInsult = require("../botFunctions/insult");

//pre-insult reply
const deflect = "You dare use my own spells against me? \n ┌∩┐(◣_◢)┌∩┐";

//TECNO === tecno bot / BOT === default BOT
const TECNO = process.env.TECNO;
const BOT = process.env.BOT;

// using setTimeout to prevent repeating insults.
// Since await only uses promises
// we need to wrap setTimeout in a promise
const setTimeoutPromise = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

//embed the insult
const embedMessage = (message, user) => {
  //replace html entities with actual characters
  message = message.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&apos;/g,"'");
  const embeddedMessage = new MessageEmbed()
  .setColor('#0099ff')
  .setDescription(`${message} ${user}`);

  return embeddedMessage;
}

// reply to message if there is only one arg
module.exports = {
  name: "insult",
  description: "Sends insults",
  async execute(msg, args) {
    //setting timeout to 2000ms
    await setTimeoutPromise(2000);
    if (args.length === 0) {
      const reply = await grabInsult();
      const insultEmbed = await embedMessage(reply.toString(), "");
      msg.reply({ embeds: [insultEmbed] });
    }

    // else loop over args and send insults
    for (let i = 0; i < args.length; i++) {
      //if either bots are mentioned
      // console.log(args[i]);
      if (args[i] === TECNO || args[i] === BOT) {
        msg.reply(deflect.toString());        
        continue;
      }
      //setting timeout to 2500ms
      await setTimeoutPromise(2500);
      const reply = await grabInsult();
      const insultEmbed = embedMessage(reply.toString(), args[i]);
      msg.channel.send({ embeds: [insultEmbed] });
    }
  },
};

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,] });
const discord = require('discord.js');
require('dotenv').config()

const prefix = '!';
const logo = 'https://i.imgur.com/P4CgYaF.png';
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activities: [{ name: 'IG: @ubc_okanagan', type: 'WATCHING' }] });
});

client.on('messageCreate', msg => {
    if(msg.content === `<@!${client.user.id}>`) {
        msg.reply({ embeds: [help()] });
        return;
    }
    if(msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        switch(command) {
            case "help":
                msg.reply({ embeds: [help()] });
                break;
            case "breakfast":
                msg.reply('wip');
                break;
            case "lunch":
            case "dinner":
                msg.reply('wip');
                break;
            case "comma":
                msg.reply('wip');
                break;
        }
    }
});

const help = () => {
    return new discord.MessageEmbed()
        .setColor('#f59542')
        .setTitle("Available commands")
        .setAuthor({ name: 'ubcobot', iconURL: logo, url: 'https://github.com/rjworks/ubcobot' })
        .addField(`${prefix}help`, "Sends the list of available commands", true)
        .addField(`${prefix}breakfast`, "Sends today's breakfast menu at Pritchard", true)
        .addField(`${prefix}lunch`, "Sends today's lunch menu at Pritchard", true)
        .addField(`${prefix}dinner`, "Sends today's dinner menu at Pritchard", true)
        .addField(`${prefix}comma`, "Sends today's menu at the Comma", true)
        .setThumbnail(logo)
        .setTimestamp()
        .setFooter({ text: 'ubcobot', iconURL: logo });
}


client.login(process.env.TOKEN);

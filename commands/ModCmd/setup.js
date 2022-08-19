const Discord = require("discord.js");
const { ticket_set } = require("../../config.json");

module.exports = {
    name: "setup",
    run: async (message, args, client, default_prefix) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) return;
        let ticketRoom = client.channels.cache.get(ticket_set.ticket_chat);
        if (!ticketRoom) return;

        let embed = new Discord.MessageEmbed()
            .setAuthor({ name: "Store", iconURL: message.author.avatarURL() })
            .setColor("#ffce00")
            .setThumbnail(message.author.avatarURL())
            .setFooter({ text: `جميع الحقوق محفوظة`, iconURL: message.author.avatarURL() })
            .addField("**الخدمات**",
                `مابات [ 🌆 ]\nتصاميم [ 🖌 ]\nسكنات فايف إم [ 🧙‍♂️ ]\nبرمجة [ ⌨ ]\nاخرى [ ❓ ]`)

        let btn1 = new Discord.MessageButton()
            .setCustomId("1")
            .setEmoji("🌆")
            .setStyle("SECONDARY")

        let btn2 = new Discord.MessageButton()
            .setCustomId("2")
            .setEmoji("🖌")
            .setStyle("SECONDARY")

        let btn3 = new Discord.MessageButton()
            .setCustomId("3")
            .setEmoji("🧙‍♂️")
            .setStyle("SECONDARY")

        let btn4 = new Discord.MessageButton()
            .setCustomId("4")
            .setEmoji("⌨")
            .setStyle("SECONDARY")

        let btn5 = new Discord.MessageButton()
            .setCustomId("5")
            .setEmoji("❓")
            .setStyle("SECONDARY")

        let row = new Discord.MessageActionRow()
            .addComponents(btn1, btn2, btn3, btn4, btn5)

        ticketRoom.send({ embeds: [embed], components: [row] }).catch(err => console.log(err));
    }
}
const { Client, Intents, Collection, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const moment = require("moment");
const config = require("./config.json");
const client = new Client({
  shards: "auto",
  allowedMentions: {
    parse: ["everyone", "roles", "users"],
  },
  partials: ["CHANNEL", "GUILD_MEMBER", "GUILD_SCHEDULED_EVENT", "MESSAGE", "REACTION", "USER"],
  intents: [
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_WEBHOOKS,
  ]
});

client.on("warn", w => console.error(w));
client.on("error", e => console.error(e));

client.commands = new Collection();

["readCommands"].forEach(handler => {
  require(`./handler/${handler}`)(client);
});

["messageCreate", "ready"].forEach(events => {
  require(`./events/${events}`)(client);
});

client.on("interactionCreate", async (interaction) => {

  let embedCreateTicket = new MessageEmbed()
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setTimestamp()
    .setDescription(config.ticket_msg.welcome)

  let closeBtn = new MessageButton()
    .setCustomId("closeBtn")
    .setStyle("DANGER")
    .setLabel("Close 🔒")

  let closeRow = new MessageActionRow()
    .addComponents(closeBtn)

  let YesClose = new MessageButton()
    .setCustomId("YesClose")
    .setStyle("DANGER")
    .setLabel("Yes")

  let NoClose = new MessageButton()
    .setCustomId("NoClose")
    .setStyle("SUCCESS")
    .setLabel("No")

  let ConfirmRow = new MessageActionRow()
    .addComponents(YesClose, NoClose)

  let DeleteBtn = new MessageButton()
    .setCustomId("DeleteBtn")
    .setStyle("SECONDARY")
    .setLabel("Delete 🗑")

  let DeleteRow = new MessageActionRow()
    .addComponents(DeleteBtn)

  if (interaction.isButton()) {

    if (interaction.customId === "1") {
      interaction.guild.channels.create(`Ticket-${interaction.user.username}`, {
        reason: "Ticket_Bot",
        parent: config.ticket_set.cat_map,
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: [
              "VIEW_CHANNEL"
            ]
          },
          {
            id: interaction.user.id,
            allow: [
              "SEND_MESSAGES",
              "ATTACH_FILES",
              "VIEW_CHANNEL"
            ]
          }
        ]
      }).then(msg => {
        interaction.reply({ content: `${config.ticket_msg.open} **<#${msg.id}>**`, ephemeral: true })
        msg.send({ content: `${interaction.user}`, embeds: [embedCreateTicket], components: [closeRow] })
      });
    }

    if (interaction.customId === "2") {
      interaction.guild.channels.create(`Ticket-${interaction.user.username}`, {
        reason: "Ticket_Bot",
        parent: config.ticket_set.cat_design,
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: [
              "VIEW_CHANNEL"
            ]
          },
          {
            id: interaction.user.id,
            allow: [
              "SEND_MESSAGES",
              "ATTACH_FILES",
              "VIEW_CHANNEL"
            ]
          }
        ]

      }).then(msg => {
        interaction.reply({ content: `${config.ticket_msg.open} **<#${msg.id}>**`, ephemeral: true })
        msg.send({ content: `${interaction.user}`, embeds: [embedCreateTicket], components: [closeRow] })
      });
    }

    if (interaction.customId === "3") {
      interaction.guild.channels.create(`Ticket-${interaction.user.username}`, {
        reason: "Ticket_Bot",
        parent: config.ticket_set.cat_skin,
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: [
              "VIEW_CHANNEL"
            ]
          },
          {
            id: interaction.user.id,
            allow: [
              "SEND_MESSAGES",
              "ATTACH_FILES",
              "VIEW_CHANNEL"
            ]
          }
        ]

      }).then(msg => {
        interaction.reply({ content: `${config.ticket_msg.open} **<#${msg.id}>**`, ephemeral: true })
        msg.send({ content: `${interaction.user}`, embeds: [embedCreateTicket], components: [closeRow] })
      });
    }

    if (interaction.customId === "4") {
      interaction.guild.channels.create(`Ticket-${interaction.user.username}`, {
        reason: "Ticket_Bot",
        parent: config.ticket_set.cat_programming,
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: [
              "VIEW_CHANNEL"
            ]
          },
          {
            id: interaction.user.id,
            allow: [
              "SEND_MESSAGES",
              "ATTACH_FILES",
              "VIEW_CHANNEL"
            ]
          }
        ]

      }).then(msg => {
        interaction.reply({ content: `${config.ticket_msg.open} **<#${msg.id}>**`, ephemeral: true })
        msg.send({ content: `${interaction.user}`, embeds: [embedCreateTicket], components: [closeRow] })
      });
    }

    if (interaction.customId === "5") {
      interaction.guild.channels.create(`Ticket-${interaction.user.username}`, {
        reason: "Ticket_Bot",
        parent: config.ticket_set.cat_other,
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: [
              "VIEW_CHANNEL"
            ]
          },
          {
            id: interaction.user.id,
            allow: [
              "SEND_MESSAGES",
              "ATTACH_FILES",
              "VIEW_CHANNEL"
            ]
          }
        ]

      }).then(msg => {
        interaction.reply({ content: `${config.ticket_msg.open}: **<#${msg.id}>**`, ephemeral: true })
        msg.send({ content: `${interaction.user}`, embeds: [embedCreateTicket], components: [closeRow] })
      });
    }

    if (interaction.customId === "closeBtn") {
      await interaction.deferUpdate();
      interaction.channel.send({ content: `${config.ticket_msg.close}`, components: [ConfirmRow] })
    }

    if (interaction.customId === "YesClose") {
      await interaction.deferUpdate();
      interaction.channel.setParent(config.ticket_set.pick_up);
      interaction.deleteReply();
      interaction.channel.lockPermissions();
      setTimeout(() => {
        interaction.channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
          VIEW_CHANNEL: false
        })
      }, 500)
      interaction.channel.send({ content: `${config.ticket_msg.qus_delete}`, components: [DeleteRow] })
      interaction.channel.setName(`closed-${moment().format('l')}`);
    }

    if (interaction.customId === "NoClose") {
      await interaction.deferUpdate();
      interaction.deleteReply();
    }

    if (interaction.customId === "DeleteBtn") {
      await interaction.deferUpdate();
      interaction.deleteReply();
      interaction.channel.send({ embeds: [new MessageEmbed().setDescription(config.ticket_msg.delete)] })
      setTimeout(() => {
        interaction.channel.delete();
      }, 5000)
    }

  }
});

client.login(config.token);
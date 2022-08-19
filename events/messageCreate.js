const { default_prefix } = require("../config.json");

module.exports = (client) => {
    client.on("messageCreate", async(message) => {

        if (!message.guild) return;
        if (!message.guild.me.permissions.has("ADMINISTRATOR")) return;
        if (!message.content.startsWith(default_prefix) || message.author.bot) return;
        if (!message.member) {
            message.member = await message.guild.fetchMember(message);
        }

        const args = message.content.slice(default_prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLocaleLowerCase();
        if (cmd.length === 0) return;
        let command = client.commands.get(cmd);
        if (!command) return;

        try {
            if (command) {
                command.run(message, args, client, default_prefix)
            }
        } catch (err) {
            return console.log(err)
        }

    });
};
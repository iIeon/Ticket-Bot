const fs = require("fs");

module.exports = (client) => {
    fs.readdirSync("./commands/").forEach(folder => {
        const commands = fs.readdirSync(`./commands/${folder}`).filter(files => files.endsWith(".js"));
        for (let file of commands) {
            let cmd = require(`../commands/${folder}/${file}`);
            if (cmd) {
                client.commands.set(cmd.name, cmd);
                console.log(`✅ | ${file}`)
            } else {
                continue;
            }
        }

    });
}
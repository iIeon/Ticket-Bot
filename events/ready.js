const { default_prefix } = require("../config.json");

module.exports = (client) => {
    client.on("ready", () => {
        client.user.setPresence({
            status: "dnd",
            activities: [
                {
                    name: `Prefix [ ${default_prefix} ]`,
                    type: "PLAYING"
                }
            ]
        });

        console.log(`${client.user.tag} logged in ✅`)
    });
};
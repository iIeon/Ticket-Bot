module.exports = {
    name: "ping",

    run: async(message, args, client, default_prefix) => {
        message.reply({content: `Latency API: **${client.ws.ping}** 🌐`})
    }
}
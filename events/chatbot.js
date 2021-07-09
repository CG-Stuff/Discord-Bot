const { chatBot } = require("reconlx");
const client = require("../index");
const Schema = require("../models/chatbot-channel");
client.on("message", async (message) => {
    console.log("ChatBotworking");
    if (!message.guild || message.author.bot) return;
    Schema.findOne({ Guild: message.guild.id}, async (err, data) => {
        if(!data) return message.channel.send("no data");
        if (message.channel.id !== data.Channel) return;
        chatBot(message, message.channel, message.author.id);
    });
});
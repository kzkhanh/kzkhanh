module.exports.config = {
  name: "tid",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "tid có voice",
  commandCategory: "không cần dấu lệnh",
  usages: "",
  cooldowns: 0,
  denpendencies: {
      "fs": "",
      "request": ""
  }
};
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/Kz/`;
  if (!fs.existsSync(dirMaterial + "Kz")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "tid.mp3")) request("https://data.whicdn.com/images/312923454/original.mp4").pipe(fs.createWriteStream(dirMaterial + "tid.mp3"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
  const fs = require("fs");
  let name = await Users.getNameUser(event.senderID)
  var msg = {
              body: `𝐓𝐈𝐃 𝐛𝐨𝐱 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ${event.threadID}`,
              attachment: fs.createReadStream(__dirname + `/Kz/tid.mp3`)
          }
  if (event.body.toLowerCase() == "tid"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == ".tid"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == ",tid"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "/tid"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
if (event.body.toLowerCase() == "?tid"){
      return api.sendMessage(msg,event.threadID,event.messageID);}

  if (event.body.toLowerCase() == "!tid"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
      };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
}
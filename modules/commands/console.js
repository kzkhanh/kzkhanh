module.exports.config = {
  name: "console",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "Nguyễn Sơn", // Nhật Phú mod vài thứ vớ vẩn 🐧
  description: "",
  commandCategory: "Admin",
  usages: "",
  cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
  let { messageID, threadID, senderID, mentions } = event;
  const chalk = require('chalk');
   const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  var d = new Date();
  const cc = d.getDay();
  const ss = d.getYear();
  const yy = d.getMonth();
  switch (cc) {
      case 0: {
          textt = "Chủ Nhật"
          break;
      }
      case 1: {
          textt = "Thứ Hai"
          break;
      }
      case 2: {
          textt = "Thứ Ba"
          break;
      }
      case 3: {
          textt = "Thứ Tư"
          break;
      }
      case 4: {
          textt = "Thứ Năm"
          break;
      }
      case 5: {
          textt = "Thứ Sáu"
          break;
      }
      default: {
          textt = "Thứ Bảy"
      }
  }
const thread = global.data.threadData.get(event.threadID) || {};
if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
if (event.senderID == global.data.botID) return;
var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
var boxId = event.threadID || "Không thể lấy ID";
var nameUser = await Users.getNameUser(event.senderID)
  var uid = event.senderID;
  var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
  var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066","008E97","F58220","38B6FF","7ED957","CCFFCC","CCFF99","CCFF66","CCFF33","CCFF00"];
  var random = 
job[Math.floor(Math.random() * job.length)]      
  var random1 = job[Math.floor(Math.random() * job.length)]
 var random2 = job[Math.floor(Math.random() * job.length)]
var random3 = job[Math.floor(Math.random() * job.length)]
var random4 = job[Math.floor(Math.random() * job.length)]
var random5 = job[Math.floor(Math.random() * job.length)]
var random6 = job[Math.floor(Math.random() * job.length)]
console.log(chalk.hex("#" + random)(`『💬』➝ 𝙱𝚘𝚡 𝙽𝚊𝚖𝚎: ${nameBox}`) + "  " + chalk.hex("#" + random1)(`\n『🔎』➝ 𝙸𝙳 𝚃𝚑𝚛𝚎𝚊𝚍: ${boxId}`) + "" + chalk.hex("#" + random5)(`\n『👥』➝ 𝙽𝚊𝚖𝚎 𝚄𝚜𝚎𝚛: ${nameUser}`) + "  " + chalk.hex("#" + random2)(`\n『🎀』➝ 𝙸𝙳 𝚄𝚜𝚎𝚛: ${uid}`) + " " + chalk.hex("#" + random6)(`\n『📥』➝ 𝚃𝚎𝚡𝚝: ${msg}`) + `\n` + chalk.hex("#" + random3)(`『⏰』➝ 𝚃𝚒𝚖𝚎: ${textt} ${time}`) + "  " + chalk.hex("#" + random4)(`\n▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰▱▰`)); }
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {

             }
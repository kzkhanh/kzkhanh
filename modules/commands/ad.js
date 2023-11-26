module.exports.config = {
  name: "adm",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.handleEvent = async ({
  args,
  event,
  api,
  Users
}) => {
  const fs = global.nodemodule["fs-extra"];
  const moment = require('moment-timezone');
  const timeStart = Date.now();
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  var {
    threadID,
    messageID,
    body,
    senderID
  } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["adm"] !== "undefined" && thread["chill"] == false) return;
const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID()) return;
const namebot = global.config.BOTNAME;
  const PREFIX = config.PREFIX;
  const { commands } = global.client; 
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
const res = await axios.get(`https://kz-api.kzbott.repl.co/thinh`);
var thinh = res.data.data;
  //trả lời
  var msg = {
    body: `━━━━━━ === [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] === ━━━━━━
[🕊] Tên: 🎀 Kz Khánhh (ad Chính)
[🌐] ID: 100081129610697
[👤] Giới tính: Nam
[🎊] Sinh nhật: 10-11-27
[🏠] Địa chỉ: Hải Dương
[🌸] Link Facebook: https://fb.me/kzkhanh547

• Cảm ơn vì đã sử dụng 🫧 Kz_Bot 🎀 ≧▽≦
✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
█░▄▀░▀▀▀█
█▀▄░░░▄▀░
▀░▀▀░▀▀▀▀
━━━━━━━━━━━━━━━━━━
      [ ✰ ]=== [  𝐊𝐳 𝐁𝐨𝐭𝐭 ] ===[ ✰ ]`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://kz-api.kzbott.repl.co/adv2')).data.url,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["adm"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "adm thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function({
  api,
  event,
  Threads,
  getText
}) {
  const {
    threadID,
    messageID
  } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["adm"] == "undefined" || data["adm"] == true) data["adm"] = false;
  else data["adm"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["adm"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}

//𝐕𝐃𝐀𝐍𝐈𝐌𝐄
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": ""
  }
};

const request = require('request');
const fs = require("fs");

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const threadID = event.threadID;

  const imageUrls = await Promise.all(Array.from({ length: 6 }, async () => {
    const res = await axios.get('https://kz-api.kzbott.repl.co/loliv2');
    return res.data.url;
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));


  const res = await axios.get(`https://kz-api.kzbott.repl.co/thinh`);
  var thinh = res.data.data;
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const prefix = config.PREFIX;
  const moment = require("moment-timezone");
  const timeStart = Date.now();
  var gio =
    moment.tz('Asia/Ho_Chi_Minh').format("HH:mm:ss || D/MM/YYYY");
  var thu =
    moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'

  const namebot = global.config.BOTNAME;
  var getlink = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data;
    var uid = event.senderID;

  api.sendMessage({
    body: `❏===『 𝐒𝐀𝐈 𝐋Ệ𝐍𝐇 』===❑\n『🦋』 𝗟𝗲̣̂𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 ${namebot}\n『🌸』 𝗧𝗼̂́𝗰 𝗱𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${timeStart}\n『⚙️』 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n『💓』 𝗧𝗵𝗶́𝗻𝗵: 『 ${thinh} 』\n『✅』𝐃𝐮̀𝐧𝐠 ${prefix}𝐦𝐞𝐧𝐮 𝐡𝐨𝐚̣̆𝐜 ${prefix}𝐡𝐞𝐥𝐩 đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐥𝐞̣̂𝐧𝐡\n『💮』 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👍" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐧𝐡𝐨́𝐦\n『⏰』${global.config.BOTNAME} đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞: \n           『 ${hours} : ${minutes} : ${seconds} 』\n👥 𝐓𝐡ô𝐧𝐠 𝐭𝐢𝐧 𝐧𝐠ườ𝐢 𝐝𝐮̀𝐧𝐠:\n➣ 💾𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://fb.me/${uid}\n═══════════════\n${gio} || ${thu}\n`,
attachment: attachments
},threadID,  (err, info) => {
global.client.handleReaction.push({
name: this.config.name,
messageID: info.messageID,
author: event.senderID,
});
},event.messageID);
};



module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
    const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
 var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};

  let threadInfo = await api.getThreadInfo(event.threadID);
 let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
  let sex = threadInfo.approvalMode;
 var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';
let color = threadInfo.color;
  let icon = threadInfo.emoji;
  let threadMem = threadInfo.participantIDs.length;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.sendMessage({
      body: `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${threadInfo.messageCount}\n🎀 𝟭: 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n📑 𝟮: 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n🎶 𝟑. 𝐍𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐫𝐚𝐧𝐝𝐨𝐦 𝐭𝐮̛̀ 𝐀𝐏𝐈\n🌟 𝟺. 𝐓𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐛𝐨𝐭 💻\n😶‍🌫️ 𝟻. 𝐓𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐛𝐨𝐱\n📝𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘅𝗲𝗺 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡 𝗻𝗵𝗼́𝗺 𝘃𝗮̀ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 `,
           attachment: await streamURL(threadInfo.imageSrc)
},event.threadID, (err, info) => {

            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }


module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    permssion,
    getText,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`vui lòng chờ 1 xíu`, event.threadID, (err, info) =>
  setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;


    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
          case "1": {
         var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const info = (await api.getUserInfo(qtv2[i].id));
        const name = info[qtv2[i].id].name;
        listad += '' + `${dem++}` + '. ' + name + '\n';
    }

    api.sendMessage(
        `𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 ${qtv} 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡:\n ${listad}`,event.threadID,event.messageID)
}break;
        case "2": {
          const { ADMINBOT } = global.config;
           listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`»  ${name}\nLink: fb.me/${idAdmin}`);              
                }
            }
           return api.sendMessage(`『 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 』\n${msg.join("\n")}\n`, event.threadID, event.messageID);
}break;
          case "3": {
            const { threadID, messageID, senderID, body } = event;
  const res = await axios.get(`https://kz-api.accountkz.repl.co/thinh`);
var thinh = res.data.data;
const moment = require("moment-timezone");
  var gio =
moment.tz('Asia/Ho_Chi_Minh').format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
 if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const t = Date.parse("February 10, 2024 00:00:00") - Date.parse(new Date());
 const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  api.sendMessage({body: `◆━◆『 𝐊𝐳 𝐁𝐨𝐭 』◆━◆\n『✪』 → 𝐓𝐢𝐦𝐞: ${gio} || ${thu}\n『★』 → 𝐓𝐡𝐢́𝐧𝐡 : ${thinh} \n『✶』 → 𝐇𝐚̃𝐲 𝐜𝐮̀𝐧𝐠 𝐭𝐨̂𝐢 𝐧𝐠𝐡𝐞 𝐛𝐚̉𝐧 𝐧𝐡𝐚̣𝐜 𝐧𝐚̀𝐲 𝐧𝐡𝐚 \n『✲』 → 𝐍𝐨́ 𝐬𝐞̃ 𝐤𝐡𝐢𝐞̂́𝐧 𝐛𝐚̣𝐧 𝐯𝐮𝐢 𝐡𝐨̛𝐧 đ𝐚̂́𝐲 \n『✧』 → 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐨̀𝐧 𝐥𝐚̣𝐢 𝐜𝐡𝐨 𝐭𝐞̂́𝐭 𝐚̂𝐦: ${days} 𝐧𝐠𝐚̀𝐲 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\n『↻』 → 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 ${h} 𝐠𝐢𝐨̛̀ ${p} 𝐩𝐡𝐮́𝐭 ${s} 𝐠𝐢𝐚̂𝐲`, attachment: (await axios.get((await axios.get(`https://apirandom.ngojchaan.repl.co/mp3`)).data.url,  {
                    responseType: 'stream'
                })).data},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);

}break;
            case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━━━━━━━━\n𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀ 𝘁𝘂𝗶 𝗿𝗮̂́𝘁 𝗰𝘂𝘁𝗶 , 𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://kz-api.kzbott.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
            }break;
            case "5": {
  let threadInfo = await api.getThreadInfo(event.threadID);
 let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
  let sex = threadInfo.approvalMode;
 var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';
  let qtv = threadInfo.adminIDs.length;
let color = threadInfo.color;
  let icon = threadInfo.emoji;
  let threadMem = threadInfo.participantIDs.length;
          const axios = require('axios');
           api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body:`=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n💞 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${threadInfo.messageCount}\n🎀 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-images.duytrollgame.repl.co/rin.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
            }break;
          default:
           const choose = parseInt(event.body);
              if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
              if (choose > 2 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
       }
    }
}
}
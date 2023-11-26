module.exports.config = {
  name: "autorun",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Lay link runmoky  ve cho admin",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "vantoan.jpeg")) request("https://i.imgur.com/acdiyiE.jpeg").pipe(fs.createWriteStream(dirMaterial + "manh.jpeg"));
  }
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils})

module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !body.includes('runmoky') || senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`📥=== [ 𝗟𝗜𝗡𝗞 𝗥𝗨𝗡 𝗠𝗢𝗖𝗞𝗬 ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}
👥 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${userName}
🌍 𝗡𝗵𝗼́𝗺: ${threadName}
🌸 𝗩𝘂̛̀𝗮 𝗴𝘂̛̉𝗶 𝗺𝗼̣̂𝘁 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗼́ 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸 𝗿𝘂𝗻 𝗺𝗼𝗰𝗸𝘆
💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸: ${body}`, '100081129610697');
api.sendMessage({body: `=== [ 𝗟𝗜𝗡𝗞 𝗥𝗨𝗡 𝗠𝗢𝗖𝗞𝗬 ] ===
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}
⚙️ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗴𝘂̛̉𝗶 𝗹𝗶𝗻𝗸 𝗿𝘂𝗻 𝗺𝗼𝗰𝗸𝘆
💓 𝗧𝗶𝗲̂́𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗴𝘂̛̉𝗶 𝘃𝗲̂̀ 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗵𝘂́𝗽 `, attachment: fs.createReadStream(__dirname + `/noprefix/manh.jpeg`)}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100081129610697');
    }
};
module.exports.config = {
  name: "ảnh",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Xem ảnh réply",
  commandCategory: "Tiện ích",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  const axios = require('axios');
  const request = require('request');
  const picture = (await axios.get(`https://i.imgur.com/ZfQPhB0.jpeg`, { responseType: "stream" })).data;
  if (!n[0]) return a.sendMessage({ body: "『✯』𝐃𝐀𝐍𝐇 𝐒Á𝐂𝐇 Ả𝐍𝐇『✯』\n𝟏. Ả𝐧𝐡 𝐧ữ 💕\n𝟐. Ả𝐧𝐡 𝐍𝐚𝐦 💖\n𝟑. Ả𝐧𝐡 𝐓𝐫𝐚𝐢 𝟔 𝐌ú𝐢 ❤️‍🔥\n𝟒. Ả𝐧𝐡 𝐠á𝐢 𝐓𝐫𝐮𝐧𝐠 ❤️‍🩹\n𝟓. Ả𝐧𝐡 𝐧ữ 𝐬𝐞𝐱𝐲 \n𝟔. Ả𝐧𝐡 𝐩𝐡𝐨𝐧𝐠 𝐜ả𝐧𝐡\n𝟕. Ả𝐧𝐡 𝐚𝐧𝐢𝐦𝐞\n═══════════════\n  『✭』𝐋𝐈𝐒𝐓 𝐕𝐈𝐃𝐄𝐎『✭』\n𝟖. 𝐕𝐢𝐝𝐞𝐨 𝐠á𝐢\n𝟗. 𝐕𝐢𝐝𝐞𝐨 𝐭𝐫𝐚𝐢\n𝟏𝟎. 𝐕𝐢𝐝𝐞𝐨 𝐚𝐧𝐢𝐦𝐞\n𝟏𝟏. 𝐌ộ𝐭 𝐜𝐡ú𝐭 𝐤𝐡𝐨𝐚 𝐡ọ𝐜\n𝟏𝟐. 𝐕𝐢𝐝𝐞𝐨 𝐜𝐡𝐢𝐥𝐥\n𝟏𝟑. 𝐕𝐢𝐝𝐞𝐨 𝐭â𝐦 𝐭𝐫ạ𝐧𝐠\n𝟏𝟒. 𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐫𝐚𝐞𝐦𝐨𝐧", attachment: (picture) }, e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.url;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: "[ 𝗧𝗮̉𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ] - 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ ✡",
      attachment: t
    }, a.threadID, a.messageID)
  }

  function linkanh() {
    const p = require("axios");
    if ("1" == a.body)
      var h = "https://kz-api.kzbott.repl.co/girl";
    else if ("2" == a.body)
      var h = "https://kz-api.kzbott.repl.co/traiv2";
    else if ("3" == a.body)
      var h = "https://kz-api.kzbott.repl.co/trai6muiv2";
    else if ("4" == a.body)
      var h = "https://gai-trung.ngojchaan.repl.co/random";
    else if ("5" == a.body)
      var h = "https://girlsexy.ngojchaan.repl.co/random";
    else if ("6" == a.body)
      var h = "https://kz-api.kzbott.repl.co/phongcanhv2";
    else if ("7" == a.body)
      var h = "https://kz-api.kzbott.repl.co/anime";
    else if ("8" == a.body)
      var h = "https://kz-api.kzbott.repl.co/getLink2";
    else if ("9" == a.body)
      var h = "https://kz-api.kzbott.repl.co/vdtraiv2";
    else if ("10" == a.body)
      var h = "https://kz-api.kzbott.repl.co/vdanime2";
    else if ("11" == a.body)
      var h = "https://skz-api.kzbott.repl.co/science";
    else if ("12" == a.body)
      var h = "https://kz-api.kzbott.repl.co/chill";
    else if ("13" == a.body)
      var h = "https://kz-api.kzbott.repl.co/tamtrangv2";
    else if ("14" == a.body)
      var h = "https://kz-api.kzbott.repl.co/doraemon";
    return { p, h };
  }
};


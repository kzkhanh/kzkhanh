module.exports.config = {
  name: "autorestart",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "",
  description: "Tự động khởi động lại mỗi tiếng một lần vào phút thứ 52 theo giờ Việt Nam",
  commandCategory: "System",
  cooldowns: 0
}

module.exports.handleEvent = async function({ api }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("mm");

  if (timeNow === "52") {
    console.log("Bot sẽ khởi động lại!");
    for (let admin of global.config.ADMINBOT) {
      setTimeout(() =>
        api.sendMessage("Bot sẽ khởi động lại, vui lòng đợi một lát nha!", admin, () => process.exit(1)), 2000);
    }
  }
}

module.exports.run = async ({ api, event }) => {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  api.sendMessage(`Bây giờ là ${timeNow} theo giờ Việt Nam.`, event.threadID);
}
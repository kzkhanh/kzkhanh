module.exports.config = {
  name: "apkpure",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "",
  commandCategory: "aa",
  usage: "[Text usages]",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": ""
  }
};

module.exports.run = function({ api, event, args }) {
  if (args.length === 0) {
    return api.sendMessage("Vui lòng nhập nội dung cần tìm kiếm.", event.threadID, event.messageID);
  }

  const textNeedSearch = args.join(" ");
  const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\(\?:[\_-]+\=[\_-]+\))(?:&[\_-]+\=[\_-]+)*)(.*)($)/;

  if (regex.test(textNeedSearch)) {
    api.sendMessage(`https://www.google.com/searchbyimage?&image_url=${textNeedSearch}`, event.threadID, event.messageID);
  } else {
    api.sendMessage(`https://m.apkpure.com/vn/search?q=${encodeURIComponent(textNeedSearch)}`, event.threadID, event.messageID);
  }
}

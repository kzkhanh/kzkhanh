module.exports.config = {
  name: "baygiola",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "Trả về thời gian hiện tại khi người dùng hỏi 'Bây giờ là?'",
  commandCategory: "Tiện ích",
  usages: [],
  cooldowns: 0,
  dependencies: {
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
  const time = process.uptime();
  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  const ngay = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
  const thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  const thuMap = {
    'Sunday': 'Chủ Nhật',
    'Monday': 'Thứ Hai',
    'Tuesday': 'Thứ Ba',
    'Wednesday': 'Thứ Tư',
    'Thursday': 'Thứ Năm',
    'Friday': 'Thứ Sáu',
    'Saturday': 'Thứ Bảy'
  };
  const thuVietnamese = thuMap[thu] || thu;
  const {
    threadID,
    body,
    senderID
  } = event;

  const thread = global.data.threadData.get(threadID) || {};

  if (body === "Bây giờ là?" || body === "mấy giờ rồi?" || body=== "mấy giờ rồi?" || body=== "time" || body=== "Mấy giờ rồi?" || body=== "Bây giờ là mấy giờ?") {
    const replyMessage = `Bây giờ là ${gio}\nNgày ${ngay} - ${thuVietnamese}.`;
    api.sendMessage(replyMessage, threadID);
  }

  if (typeof thread["mấy giờ rồi?", "time", "Mấy giờ rồi?", "Bây giờ là mấy giờ?"] !== "undefined" && thread["mấy giờ rồi?", "time", "Mấy giờ rồi?", "Bây giờ là mấy giờ?"] == false) return;

  // Xử lí các công việc khác ở đây
  // ...
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "time thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "time success!",
  }
};

module.exports.run = async function ({
  api,
  event,
  Threads,
  getText
}) {
  const {
    threadID,
    messageID
  } = event;
  const data = (await Threads.getData(threadID)).data;

  if (typeof data["mấy giờ rồi?", "time", "Mấy giờ rồi?", "Bây giờ là mấy giờ?"] == "undefined" || data["mấy giờ rồi?", "time", "Mấy giờ rồi?", "Bây giờ là mấy giờ?"] == true) data["mấy giờ rồi?", "time", "Mấy giờ rồi?", "Bây giờ là mấy giờ?"] = false;
  else data["mấy giờ rồi?", "time", "Mấy giờ rồi?", "Bây giờ là mấy giờ?"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["mấy giờ rồi?", "time", "Mấy giờ rồi?", "Bây giờ là mấy giờ?"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};

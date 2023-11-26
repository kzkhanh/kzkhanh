module.exports.config = {
  name: "upt11",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "Kiểm tra",
  commandCategory: "Hệ Thống",
  usages: "[Tag]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args, }) => {
  const { threadID, messageID, senderID, mentions } = event;
  const fs = require('fs');
const axios = require('axios')
 if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
  ////////phần hiển thị trên ảnh/////
         const moment = require("moment-timezone");
        var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
          var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
            if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
    if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
    if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
    if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
    if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
    if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
    if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'  
   const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);    
  const admin = config.ADMINBOT;
   var namebot =`𝐵𝑜𝑡 𝑛𝑎𝑚𝑒:   ${global.config.BOTNAME}`
   var tg = `${thu} || ${gio}`
   var upt = `𝑇𝑖𝑚𝑒 𝑜𝑛𝑙:  ${hours}:${minutes}:${seconds}`;
   var lệnh = `𝐵𝑜𝑡 𝑐𝑜́:    ${client.commands.size} lệnh`
  var prefix = `𝑃𝑟𝑒𝑓𝑖𝑥:      ${global.config.PREFIX}`
  var phiên_bản = `𝑃ℎ𝑖𝑒̂𝑛 𝑏𝑎̉𝑛: :      ${global.config.version}`
  var Allbox = `Tổng nhóm:      ${global.data.allThreadID.length}`
  var Allnguoi = `Tổng người dùng:      ${global.data.allUserID.length}`
  var Admin = `𝐴𝑑𝑚𝑖𝑛 𝑏𝑜𝑡:   ${admin.length}`
   //////////////////// xử lí code để hiển thị trên hình ảnh//////
   const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/atmaraxy.png";
    let bg = (await axios.get(`https://i.imgur.com/dZ1A8lH.jpg`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
           let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "80px SplineSans-Medium";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText('' + namebot.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 710, 1050);
    ctx.fillText('' + prefix.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 500, 1150);
    ctx.fillText('' + upt.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '', 630, 1250);
    ctx.fillText('' + lệnh.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 630, 1350);
    ctx.fillText('' + phiên_bản.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 670, 1450);
    ctx.fillText('' + Allbox.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 590, 1550);
    ctx.fillText('' + Allnguoi.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 690, 1650);
    ctx.fillText('' + Admin.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 570, 1750);
    ctx.fillText('' + tg.replace(/\A(?=(\d{10})+(?!\d))/g, '.') + '', 900, 1850);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);




       var msg =  {body: `======『 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 』======\n`, attachment: fs.createReadStream(path)
    }  
   return api.sendMessage( msg,  threadID, async (error, info) => {
    fs.unlinkSync(path),
        messageID
      })
      }




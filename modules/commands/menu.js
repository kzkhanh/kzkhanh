module.exports.config = {
  name: "menu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "Hướng dẫn cho người mới",
  usages: "[all/-a] [số trang]",
  commandCategory: "Danh sách lệnh",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};
module.exports.handleReply = async function ({ api, event, handleReply }) {
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  let num = parseInt(event.body.split(" ")[0].trim());
  (handleReply.bonus) ? num -= handleReply.bonus : num;
  let msg = "";
  let data = handleReply.content;
  let check = false;
  if (isNaN(num)) msg = "Hãy nhập 1 con số mà bạn muốn";
  else if (num > data.length || num <= 0) msg = "Số bạn chọn không nằm trong danh sách, vui lòng thử lại";
  else {
    const { commands } = global.client;
    let dataAfter = data[num-=1];
    if (handleReply.type == "cmd_info") {
      let command_config = commands.get(dataAfter).config;
      msg += `ㅤ      『  ${command_config.commandCategory.toUpperCase()}   』  \n━━━━━━━━━━━━\n`;
      msg += `\n𝐓𝐞̂𝐧 𝐋𝐞̣̂𝐧𝐡: ${dataAfter}`;
      msg += `\n𝐌𝐨̂ 𝐓𝐚̉: ${command_config.description}`;
      msg += `\n𝐂𝐚́𝐜𝐡 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠: ${(command_config.usages) ? command_config.usages : ""}`;
      msg += `\n𝚃𝚑𝚘̛̀𝚒 𝙶𝚒𝚊𝚗 𝙲𝚑𝚘̛̀: ${command_config.cooldowns || 5}s`;
      msg += `\n𝐐𝐮𝐲𝐞̂̀𝐧 𝐇𝐚̣𝐧: ${(command_config.hasPermssion == 0) ? "𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐃𝐮̀𝐧𝐠" : (command_config.hasPermssion == 1) ? "𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦" : "𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
      msg += `\n\n» 𝐌𝐨𝐝𝐮𝐥𝐞 𝐜𝐨𝐝𝐞 𝐛𝐲 ${command_config.credits} «`;
    } else {
      check = true;
      let count = 0;
      msg += `『 🌸 』 ━『  ${dataAfter.group.toUpperCase()}  』━『 🌸 』 \n\n`;

      dataAfter.cmds.forEach(item => {
        msg += `\n━━━━━━━━━━━━\n𝐋𝐞̣̂𝐧𝐡 𝐓𝐡𝐮̛́ ${count+=1} 𝐥𝐚̀ ${item}\n\n𝐌𝐨̂ 𝐓𝐚̉: ${commands.get(item).config.description}`;
      })
      msg += "\n\n╭──────╮\n    Reply \n╰──────╯ tin nhắn theo số để xem thông tin chi tiết lệnh và cách sử dụng lệnh";
    }
  }
  const axios = require('axios');
  const fs = require('fs-extra');
  const imgP = []

const img = [ 
"https://i.imgur.com/o2bOKWI.jpg"
          ]
  var path = __dirname + "/cache/help.png"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 

    let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))

    const res1 = await axios.get(`https://kz-api.kzbott.repl.co/trai`);
    const res2 = await axios.get(`https://kz-api.kzbott.repl.co/loli`);
  const res3 = await axios.get(`https://kz-api.kzbott.repl.co/girlv2`);
 // const res4 = await axios.get(`https://api-anh.vtuann.repl.co/gai2`);
  //const res5= await axios.get(`https://api-anh.vtuann.repl.co/gai2`);
  //const res6 = await axios.get(`https://api-anh.vtuann.repl.co/gai2`);
    var array = [];
    var data1 = res1.data.data;
  var data2 = res2.data.data;
  var data3 = res3.data.data;
  //var data4 = res2.data.data;
  //var data5 = res2.data.data;
    //var data6 = res2.data.data;
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
  var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
  //var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
  //var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
  //var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
    array.push(downloadfile1); 
    array.push(downloadfile2); 
    array.push(downloadfile3);
    //array.push(downloadfile4);
    //array.push(downloadfile5);
    //array.push(downloadfile6);
var msgg = {body: msg, attachment: array}
  api.unsendMessage(handleReply.messageID);
  return api.sendMessage(msgg, event.threadID, (error, info) => {
    if (error) console.log(error);
    if (check) {
      global.client.handleReply.push({
        type: "cmd_info",
        name: this.config.name,
        messageID: info.messageID,
        content: data[num].cmds
      })
    };

    if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
    else return; 
  }, event.messageID);
}
///////////////////////////////////////////
module.exports.run = async function({ api, event, args }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const axios = require('axios');
  const fs = require('fs-extra');
  const imgP = []


  const img = [ 
"https://i.imgur.com/o2bOKWI.jpg"
          ]
  var path = __dirname + "/cache/help.png"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 

    let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))

    const res1 = await axios.get(`https://kz-api.accountkz.repl.co/trai6mui`);
    const res2 = await axios.get(`https://sex.accountkz.repl.co/girlv2`);
  const res3 = await axios.get(`https://sex.accountkz.repl.co/loli`);
 // const res4 = await axios.get(`https://api-anh.vtuann.repl.co/gai2`);
  //const res5= await axios.get(`https://api-anh.vtuann.repl.co/gai2`);
  //const res6 = await axios.get(`https://api-anh.vtuann.repl.co/gai2`);
    var array = [];
    var data1 = res1.data.data;
  var data2 = res2.data.data;
  var data3 = res3.data.data;
  //var data4 = res2.data.data;
  //var data5 = res2.data.data;
    //var data6 = res2.data.data;
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
  var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
  //var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
  //var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
  //var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
    array.push(downloadfile1); 
    array.push(downloadfile2); 
    array.push(downloadfile3);
    //array.push(downloadfile4);
    //array.push(downloadfile5);
    //array.push(downloadfile6);

  const command = commands.values();
  var group = [], msg = "『 🌸 』━[ Menu ]━『 🌸 』\n";
  let check = true, page_num_input = "";
  let bonus = 0;

  for (const commandConfig of command) {
    if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
    else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
  }

  if (args[0] && ["all", "-a"].includes(args[0].trim())) {
    let all_commands = [];
    group.forEach(commandGroup => {
      commandGroup.cmds.forEach(item => all_commands.push(item));
    });
    let page_num_total = Math.ceil(all_commands.length / 2222222222);
    if (args[1]) {
      check = false;
      page_num_input = parseInt(args[1]);
      if (isNaN(page_num_input)) msg = "Vui lòng chọn số";
      else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Số bạn chọn không nằm trong danh sách, vui lòng thử lại";
      else check = true;
    }
    if (check) {

    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
      bonus = index_start;
      index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
      all_commands = all_commands.slice(index_start, index_end);
      all_commands.forEach(e => {




        msg += `\n${index_start+=1}. » ${e}: ${commands.get(e).config.description}`;
      })
      msg += `\n\nTrang ${page_num_input || 1}/${page_num_total}`;
      msg += `\nĐể xem các trang khác, dùng: ${prefix}menu [all/-a] [số trang]`;
      msg += `\nBạn có thể dùng ${prefix}help all để xem tất cả lệnh`
      msg += `\n╭──────╮\n     Reply  \n╰──────╯tin nhắn theo số để xem thông tin chi tiết lệnh và cách sử dụng lệnh`;
    }
    var msgg =  msg
    return api.sendMessage({body:msgg, attachment: array}, event.threadID,  (error, info) => {
      if (check) {
        global.client.handleReply.push({
          type: "cmd_info",
          bonus: bonus,
          name: this.config.name,
          messageID: info.messageID,
          content: all_commands
        })
      }
    }, messageID)
  }

  let page_num_total = Math.ceil(group.length / 2222222222);
  if (args[0]) {
    check = false;
    page_num_input = parseInt(args[0]);
    if (isNaN(page_num_input)) msg = "Vui lòng chọn số";
    else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Số bạn chọn không nằm trong danh sách, vui lòng thử lại";
    else check = true;
  }
  if (check) {


    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
    bonus = index_start;
    index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
    group = group.slice(index_start, index_end);
    group.forEach(commandGroup => msg += `\n${index_start+=1}. » ${commandGroup.group.toUpperCase()} `);
    msg += `\n\nTrang【${page_num_input || 1}/${page_num_total}】`;
    msg += `\nĐể xem các trang khác, dùng: ${prefix}menu [số trang]`;
    msg += `\nBạn có thể dùng ${prefix}menu all để xem tất cả lệnh`
    msg += `\n╭──────╮\n      Reply \n╰──────╯ tin nhắn theo số để xem các lệnh theo phân loại`;
  }
  var msgg = msg
  return api.sendMessage({body:msgg, attachment: array}, event.threadID,  async (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      bonus: bonus,
      messageID: info.messageID,
      content: group
    });
    if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
    else return; 
  });
  }
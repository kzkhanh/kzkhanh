module.exports.config = {
  name: "afk",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "D-Jukie",
  description: "AFK!",
  commandCategory: "Box Chat",
  usages: "afk + lí dó",
  cooldowns: 5
};
module.exports.run = async ({ event: e, api: w, args: b }) => {
  const { threadID: t, messageID: n, senderID: c } = e;
  if (!global.afk) { global.afk = new Map() }
  if(global.afk.has(t) == false) { global.afk.set(t, { v: [] }) }
  var h = global.afk.get(t)
  var r = b.join(' ') || 'Không có lí do'
  h.v.push({ c, r,  p: 1, v: [] })
  global.afk.set(t, h)
  return w.sendMessage(`🐧𝐆𝐢𝐚́𝐨 𝐜𝐡𝐮̉ đ𝐚̃ 𝐛𝐚̣̂𝐭 𝐀𝐅𝐊!\n-----------------\n𝗡𝗼𝘁𝗲: ${r}`, t, n);
}
module.exports.handleEvent = async function ({ event: e, api: w, Users }) {
  const { threadID: t, messageID: n, senderID: c, body: y } = e;
  if(!global.afk) return
  var q = global.afk.get(t);
  if(!q) return;
  var a = Object.keys(e.mentions);
  if(a.length !== 0) {
      var k = []
      for (let i of a) {
          var g = q.v.some(h => h.c == i);
          if(g == true) {
              var s = q.v.find(d => d.c == i)
              w.sendMessage(`❗️𝐆𝐢𝐚́𝐨 𝐜𝐡𝐮̉: ${(await Users.getData(i)).name} đang bận: ${s.r}`, t, n)
              s.v.push({
                  c: c,
                  y: y
              })
          }
      }
  }
  var x = q.v.some(z => z.c == c);
  var u = q.v.find(z => z.c == c);
  if(u !== undefined) {
      if(x == true && u.p == 0) {
          var m = `🐧𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 𝑎𝑑𝑚𝑖𝑛 𝑞𝑢𝑎𝑦 𝑡𝑟𝑜̛̉ 𝑙𝑎̣𝑖!\n`
          m+= `🐧𝐶𝑜́: ${u.v.length} 𝑛𝑔𝑢̛𝑜̛̀𝑖 đ𝑎̃ 𝑡𝑎𝑔 𝑡𝑟𝑜𝑛𝑔 𝑙𝑢́𝑐 𝐴𝐹𝐾\n------------------\n`
          for(let i of u.v) {
              m+= `👤 Tên: ${(await Users.getData(i.c)).name}\n👁 Nội dung: ${i.y}\n\n`
          }
          m += `🌐====[ AFK ]====🌐`
          var i = q.v.findIndex(f => f.c == c);
          q.v.splice(i, 1)
          global.afk.set(t, q);
          return w.sendMessage(`[======AFK======]\n${m}`, t, n);
      }
      u.p = 0
      global.afk.set(t, q);
  }
           }
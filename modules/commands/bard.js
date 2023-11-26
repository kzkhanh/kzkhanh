module.exports.config = {
  name: "imagesearch",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Roy",
  description: "Search an Image",
  usePrefix: false,
  commandCategory: "image",
  usages: "imagesearch [text]",
  cooldowns: 10,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "googlethis": "",
    "cloudscraper": ""
  }
};

module.exports.run = async ({ matches, event, api, extra, args }) => {

  const axios = global.nodemodule['axios'];
  const google = global.nodemodule["googlethis"];
  const cloudscraper = global.nodemodule["cloudscraper"];
  const fs = global.nodemodule["fs"];

  var query = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
  api.sendMessage(`🔎 Tìm kiếm cho ${query}...`, event.threadID, event.messageID);

  let result = await google.image(query, { safe: false });
  if (result.length === 0) {
    api.sendMessage(`Your image search did not return any result.`, event.threadID, event.messageID)
    return;
  }

  let streams = [];
  let counter = 0;

  for (let image of result) {
    // Only show 9 images
    if (counter >= 9)
      break;
    let url = image.url;
    if (!url.endsWith(".jpg") && !url.endsWith(".png"))
      continue;

    let path = __dirname + `/cache/search-image-${counter}.jpg`;
    let hasError = false;
    await cloudscraper.get({ uri: url, encoding: null })
      .then((buffer) => fs.writeFileSync(path, buffer))
      .catch((error) => {
        console.log(error)
        hasError = true;
      });

    if (hasError)
      continue;    streams.push(fs.createReadStream(path).on("end", async () => {
      if (fs.existsSync(path)) {
        fs.unlink(path, (err) => {
          if (err) return console.log(err);
        });
      }
    }));

    counter += 1;
  }

  api.sendMessage("Gửi kết quả tìm kiếm...", event.threadID, event.messageID)

  let msg = {
    body: `Ảnh kết quả cho\n"${query}"\n\Tìm thấy: ${result.length} ảnh ${result.length > 1 ? 's' : ''}\nLuôn gửi : 9 ảnh`,
    attachment: streams
  };
  api.sendMessage(msg, event.threadID, event.messageID);
};
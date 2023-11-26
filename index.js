const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const logger = require("./utils/log");
const chalk = require('chalk');
const gradient = require('gradient-string');
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 80;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/utils/index.html'));
});
app.listen(port);
console.log('Bạn Đang Chạy Bot Trên Host: ' + port);

function startBot(message) {
  (message) ? logger(message, "[ Starting ]") : "";

  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (codeExit) => {
    if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
      startBot("Restarting...");
      global.countRestart += 1;
      return;
    } else return;
  });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
  logger('Kz Bot', '[ NAME ]')
  logger('Vison: không nhớ', '[ VERSION ]')
}

const gradient1 = gradient('red', 'pink', 'orange');
const gradient2 = gradient('#𝖥𝖥00𝖥𝖥', '#𝖥𝖥66𝖥𝖥', '#𝖥𝖥99𝖥𝖥', '#𝖥𝖥𝖢𝖢𝖥𝖥', '#𝖥𝖥𝖥𝖥𝖢𝖢')
const loadingBarLength = 30;
const loadingDelay = 100;

function loading(progress) {
  const percentage = Math.floor(progress * 100);
  const completedLength = Math.floor(loadingBarLength * progress);
  const loadingBar = `${'█'.repeat(completedLength)}${'░'.repeat(loadingBarLength - completedLength)}`;

  return `\t\t\t${gradient1(loadingBar)} ${percentage}%`;
}

async function getIpInfo() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    if (response.ok) {
      const data = await response.json();
      const rainbow = gradient2(`━━━━━━━━━━━━━━━━━[ LOAD INFO SEVER ]━━━━━━━━━━━━━━━━`); 
      console.log(rainbow);
      logger(data.ip, '| Địa chỉ IP |');
      logger(data.hostname, '| Tên Miền |');
      logger(data.country, '| Quốc gia |');
      logger(data.city, '| Thành phố |');
      logger(data.org, '| Nhà Mạng |'); 
    } else {
      logger('Lỗi: Không thể lấy thông tin IP', response.status);
    }
  } catch (error) {
    logger('Lỗi:', error);
  }
}
function hieuungchuyendong() {
  let progress = 0;
  const loadingInterval = setInterval(() => {
    console.clear();
    console.log(chalk.bold(gradient1(`      `)));
    if (progress < 1) {
      console.log(loading(progress));
      progress += 0.05;
    } else {
      console.log(loading(1));
      console.log(gradient2('\n━━━━━━━━━━━━━━━━━━━[ Thông Tin File ]━━━━━━━━━━━━━━━━━━━━'))
      getIpInfo();
      startBot();
      clearInterval(loadingInterval);
    }
  }, loadingDelay);
}

hieuungchuyendong();

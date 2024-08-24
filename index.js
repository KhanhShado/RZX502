const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require('express');
const path = require('path');
const chalk = require('chalkercli');
const chalk1 = require('chalk');
const CFonts = require('cfonts');
const app = express();
const port = process.env.PORT || 8080;
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = 'Chủ Nhật'
if (thu == 'Monday') thu = 'Thứ Hai'
if (thu == 'Tuesday') thu = 'Thứ Ba'
if (thu == 'Wednesday') thu = 'Thứ Tư'
if (thu == "Thursday") thu = 'Thứ Năm'
if (thu == 'Friday') thu = 'Thứ Sáu'
if (thu == 'Saturday') thu = 'Thứ Bảy'




console.log('ㅤㅤㅤㅤ            Hôm nay là :' +  thu,'' )



app.get('/', function(req, res) {
  
    res.sendFile(path.join(__dirname, '/index.html'));
  
});


app.listen(port);
console.log('Bot đang chạy trên post: http://localhost:' + port,"" "\n");


const rainbow = chalk.rainbow(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ       ==== ZEKI PROJECT ====`).stop();
rainbow.render();
const frame = rainbow.frame(); 
console.log(frame);
logger("Your Used Latest Version Project!", "UPDATE");


function startBot(message) {
    (message) ? logger(message, "Bot Starting") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

   child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Restarting!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
axios.get("https://raw.githubusercontent.com/tandung1/Bot12/main/package.json").then((res) => {
    logger(res['data']['name'], "[ Name ]");
    logger("Version: " + res['data']['version'], "[ Version ]");
    logger(res['data']['description'], "[ Description ]");
})
setTimeout(async function () {
CFonts.say('Zeki', {
		font: 'block',
    	align: 'center',
  gradient: ['red', 'magenta']
		})
CFonts.say(`Bot Messenger Created By Khanh Shado`, {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})
  CFonts.say('Zeki', {
		font: 'block',
    	align: 'center',
  gradient: ['red', 'magenta']
		})

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
  
  logger('Tiến hành kết nối tới main', 'LOADING')
  startBot()
}, 70)
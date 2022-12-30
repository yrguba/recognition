var express = require('express');
var app = express();

const { exec } = require("child_process");

setInterval(() => {
    console.log(1111)
    exec(`ffmpeg -y -i rtsp://watch:ZimaLeto2022@93.188.122.139:554/cam/realmonitor?channel=1&subtype=0 -vframes 1 ./images/${Date.now()}.jpg`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}, 5000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen('5001');

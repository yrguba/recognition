var express = require('express');
var app = express();

const { exec } = require("child_process");
var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();


ffmpeg('rtsp://watch:ZimaLeto2022@93.188.122.139:554/cam/realmonitor?channel=1&subtype=0')
    .format('image2')
    .outputOptions(['-r 1/5','-vframes 1'])
    .saveToFile('./images/img.jpg');

//const Recorder = require('node-rtsp-recorder').Recorder

// var rec = new Recorder({
//     url: 'rtsp://watch:ZimaLeto2022@93.188.122.139:554/cam/realmonitor?channel=1&subtype=0',
//     folder: './videos',
//     name: 'cam1',
//     type: 'image',
// })
//
// rec.captureImage((image) => {
//     console.log(image)
//     console.log('Image Captured')
// })



setInterval(() => {
    console.log(121212)

    // try {
    //     ffmpeg('rtsp://watch:ZimaLeto2022@93.188.122.139:554/cam/realmonitor?channel=1&subtype=0')
    //         .format('image2')
    //         //.outputOptions(['-r 1/5', '-updatefirst 1'])
    //         .outputOptions('-updatefirst 1')
    //         .saveToFile('./images/img.jpg');
    // } catch (error) {
    //     console.log(error)
    //}

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
}, 10000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen('5001');

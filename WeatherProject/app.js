const express = require('express');
const app = express();
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');

// app.get("/", (req, res)=>{

//     const lat ='19.508';
//     const lon = '72.126';
// //    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=a81d450e6929c596b32bb77c8556ecc3#'; 
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}6&appid=a81d450e6929c596b32bb77c8556ecc3`;
//    https.get(url,(response)=>{
//     // console.log(response);
    
//     //    response.on('data', (d)=>{
//     //     process.stdout.write(d);
//     //     process.exit();
//     //    }) 
//     response.on('data', function(data){
//        const weaterData = JSON.parse(data);
//        const temp = weaterData.main.temp;
//        const imageURL = 'https://openweathermap.org/img/wn/10d@2x.png';
//        console.log(temp);
//        console.log(weaterData.name);
//        console.log(weaterData.weather[0].description);
//        res.write('<h2>' +weaterData.name+'</h2>');
//        res.write('<h2>' +weaterData.weather[0].description+'</h2>');
//        res.write("<h1>the temp in "+weaterData.name + temp+"</h1>");
//        res.write('<img src="https://openweathermap.org/img/wn/03d@2x.png" alt="weather">');
//        res.send();       
//     //    res.send(weaterDat
//     //    console.log(weaterData.cod);
//     })
    
// })
// })

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', function(req, res){
    console.log('Post received');
    console.log(req.body.lat);
    console.log(req.body.lon);
    const lat = parseFloat(req.body.lat);
    const lon = parseFloat(req.body.lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}6&appid=a81d450e6929c596b32bb77c8556ecc3`;
    https.get(url, (response)=>{
        response.on('data', (data)=>{
            const weaterData = JSON.parse(data);
            const location = weaterData.name;
            res.send('<h1>'+location+'</h1>'); 
        })
    })
});

app.listen(8000, function(){
    console.log("server running on port 8000");    
});
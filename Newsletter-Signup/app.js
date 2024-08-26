const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const request = require('request');
const https = require('https');
const mailchimpKey ='d288a17cbb3d26acf2f28bb8a869d36c-us13';
const serverPrefix = 'us13';
const listId =  '423804c099';



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res)=>{
    const firstName = String(req.body.firstName);
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;    

    const data = {
        members :[
            {
                email_address : email,
                status : "subscribed",
                merge_fields : {
                    FNAME : firstName,
                    LNAME : lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = 'https://us13.api.mailchimp.com/3.0/lists/423804c099'
    const options = {
        method :"POST",
        auth : "creative:d288a17cbb3d26acf2f28bb8a869d36c-us13"
    }
    const request = https.request(url, options, function(response){
        if (response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html');
        }else {
            res.sendFile(__dirname +'/failure.html')
        }
        response.on("data", function(data){
             console.log(JSON.parse(data));
             
        })
    });

    request.write(jsonData);
    request.end();
})

app.post('/failure', function(req, res){
    res.redirect('/');
});

app.listen(process.env.PORT || 8000, ()=>{
    console.log('server running on port 8000');    
});


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const mailchimpKey ='d288a17cbb3d26acf2f28bb8a869d36c-us13';
const serverPrefix = 'us13';

app.listen(8000, ()=>{
    console.log('server running on port 8000');    
});

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

})


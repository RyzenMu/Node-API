const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

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
    console.log();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);    
})


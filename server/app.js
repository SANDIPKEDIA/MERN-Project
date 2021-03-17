const dotenv = require('dotenv')
const mongoose = require('mongoose');
const express = require('express');
const app = express();


//my database name and password declare in config.env file i dont want to visible to anyone keeps it private thats why i used dotenv 
dotenv.config({path:"./config.env"})


//connect with db folder where i cinnect with moongoose(database)
require("./db/conn");

//Also i make my port not visible to anyone
const PORT = process.env.PORT






//Middleware


const middleware=  (req,res,next)  =>{
    console.log('middle');
    next();

}
// middleware();




app.get('/', (req, res) => {
    res.send("Hello from Backend");
})
app.get('/aboutme',middleware, (req, res) => {
    console.log("about");
    res.send("Hello from aboutme");
    
})

app.get('/contact', (req, res) => {
    res.send("Hello from contact");
})










app.listen(PORT, () => {
    console.log(`Service is Running ${PORT}`);
})
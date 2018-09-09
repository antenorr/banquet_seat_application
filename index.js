const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-Parser');
const path = require('path');

//Routers -- these are my Route handlers -miniapplications
const seatedRouter = require('./router-files/seatedRouter');


const app = express();
// This step allows us to handle data parsing thus req.body 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Our logger 
app.use(morgan("short"));

/***** FILE REQUIREMENTS ABOVE  ******* */



app.get("/", (req, res) => {
    res.send("Hello world");
});


// "R" - "GET" Router to handle all seated inquirey both seated and unseated
app.use('/api/seats', seatedRouter);

// "U" - "Upate" Router to handle all seated inquirey both seated and unseated
app.use('/api/seats')












const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Your application is running on port: ${port}`);
})
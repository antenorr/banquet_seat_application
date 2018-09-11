const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//Routers -- these are my Route handlers -miniapplications
const seatedRouter = require('./router-files/seatedRouter');
const updateRouter = require('./router-files/updateRouter');
const createRouter = require('./router-files/createRouter');
const deleteRouter = require('./router-files/deleteRouter')


const app = express();
// This step allows us to handle data parsing thus req.body 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
//Our logger 
app.use(morgan("short"));

/***** FILE REQUIREMENTS ABOVE  ******* */

app.get("/", (req, res) => {
    res.send("Hello world\n");
});

// "C" - "CREATE" Router to handle the addition of a new guest to the seated or waiting list - Requires body - a name and phone
app.use('/api/seats/createguest', createRouter);

// "R" - "GET" Router to handle all seated inquirey both seated and unseated-
app.use('/api/seats', seatedRouter);

// "U" - "Upate" Router to handle a seated inquirey both seated and unseated- Requires ID
app.use('/api/seats/updateseated', updateRouter);

// "D" - "DELETE" Router to handle the Deletion of a particular guest from the seated or the waiting list - Requires ID & Specified list
app.use('/api/seats/deleteguest', deleteRouter)


// The "catchall" handler: for any request that does not
// match any above, we will send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Your application is running on port: ${port}`);
})

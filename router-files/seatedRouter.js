
const express = require('express')
const router = express.Router()
const fs = require('fs');



let fetchSeatingInfo = (path) => {
    try {
        let notesString = fs.readFileSync( path );
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

//gets both seated an unseated list
router.get('/', (req, res) => {
    let status = {
        seated: null,
        waiting: null
    };

    let seated = fetchSeatingInfo('./pers-files/seated.json');
    status.seated = seated;
    let waiting = fetchSeatingInfo('./pers-files/waiting.json');
    status.waiting =  waiting;

    res.json(status);
  
})


module.exports = router;
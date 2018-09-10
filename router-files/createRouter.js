const express = require('express')
const router = express.Router()
const fs = require('fs');
// const bodyParser = require('body-Parser');

const app = express();

// This step allows us to handle data parsing thus req.body 
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


let fetchSeatingInfo = (path) => {
    try {
        let notesString = fs.readFileSync(path);
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};


router.post('/', (req, res) => {
    let AllSeatedGuest = fetchSeatingInfo('./pers-files/seated.json');
    let AllWaitingGuest = fetchSeatingInfo('./pers-files/waiting.json');

    // AllSeatedGuest.push(
    //     { id: (AllSeatedGuest.length) + 3, name: "charly"}
    // )
   


    // console.log(  AllSeatedGuest.length + 10);

    // let x  = req.body
    // console.log(x);
    // res.json(AllSeatedGuest);
    
    if (AllSeatedGuest.length < 5) {
        console.log(AllSeatedGuest.length );
        AllSeatedGuest.push({
            id: (AllSeatedGuest.length) + 1,
            name: req.body.name
        })
        fs.writeFileSync('./pers-files/seated.json', JSON.stringify(AllSeatedGuest), 'utf8');
        res.json(AllSeatedGuest );
    } else {
        AllWaitingGuest.push({
            id: (AllWaitingGuest.length) + 1,
            name: req.body.name
        })
        fs.writeFileSync('./pers-files/waiting.json', JSON.stringify(AllWaitingGuest), 'utf8');
        res.json(AllWaitingGuest);
    }
    


  


    // let x  = req.body
    // console.log(x);
    // res.json(x);


/**
 * read the seated file and add that to a variable
 * check if there are more than 5 seats taken in that variable
 * if there are -> place on the waiting list
 * if not add that person to the seated list
 */
})






module.exports = router;
const express = require('express');
const router = express.Router();
const fs = require('fs');



let fetchSeatingInfo = (path) => {
    try {
        let notesString = fs.readFileSync(path);
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};



router.put('/:id', (req, res) => {
    let chosenId = parseInt(req.params.id);
    let seatedGuests = fetchSeatingInfo('./pers-files/seated.json');
/* below we can pluck a guest from the seated file */
    const selectedPerson = seatedGuests.find((seat) => {
        return seat.id === chosenId; 
    });
    if (! selectedPerson) {
        res.status(404).send(`The table with the id: ${chosenId} was not found!`)
    }
    



    //WE ARE JUST GOING TO SERVE NOTICE OF A SPECIFIC GUEST- WHAT'S TO UPDATE?
    //WE CAN UPDATE THE PERSONS NAME OR EMAIL IS SUPPOSE
    res.json(selectedPerson);
   
})



module.exports = router;
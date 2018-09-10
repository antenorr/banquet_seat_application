const express = require('express')
const router = express.Router()
const fs = require('fs');


let fetchSeatingInfo = (path) => {
    try {
        let notesString = fs.readFileSync(path);
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};



router.delete('/:id/:specificList', (req, res) => {
    let chosenId = parseInt(req.params.id);
    let chosenList = req.params.specificList;
    let guests = fetchSeatingInfo(`./pers-files/${chosenList}.json`);

    /* below we can pluck a guest from the specficlist from the parameter specificList */
    const selectedPerson = guests.find((seat) => {
        return seat.id === chosenId;
    });
    if (!selectedPerson) {
        res.status(404).send(`The table with the id: ${chosenId} was not found!`)
    }
    guests.splice(guests.indexOf(selectedPerson), 1) //will remove what you wanted
    let modifiedList = guests;//this will return teh modified list of what's left
    fs.writeFileSync(`./pers-files/${chosenList}.json`, JSON.stringify(modifiedList, 'utf8'));
    console.log(guests);

    // console.log(guests);
    // console.log(guests.indexOf(selectedPerson)  )
    // console.log(  guests.splice(guests.indexOf(selectedPerson)), 1     );
    // console.log('the one i want: ', guests)
    //let modifiedGuests = guests.splice(guests.indexOf(selectedPerson), 0 );


  




    //WE ARE JUST GOING TO SERVE NOTICE OF A SPECIFIC GUEST- WHAT'S TO UPDATE?
    //WE CAN UPDATE THE PERSONS NAME OR EMAIL IS SUPPOSE
    res.json(modifiedList);

})





module.exports = router;
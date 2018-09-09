const express = require('express');
const router = express.Router();
const fs = require('fs');





router.put('/:id', (req, res) => {
    let x = parseInt ( req.params.id );
    res.end(typeof x);
})






module.exports = router;
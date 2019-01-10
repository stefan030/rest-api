const express = require('express');
const router = express.Router();
const Ninja = require('./../models/ninja');

// Get a list of ninjas from database
router.get('/ninjas', (req, res, next) => {
    res.send({type: 'GET'})
});

// Add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
    // Create new instance of Ninja obj and save it to database .create
    // .then fires once the Ninja.create is finished
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);

});

// Update a ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
    res.send({type: 'PUT'})
});

// Delete a ninja from the database
router.delete('/ninjas/:id', (req, res, next) => {
    res.send({type: 'DELETE'})
});

module.exports = router;
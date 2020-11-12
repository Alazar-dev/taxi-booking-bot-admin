const express = require('express');
const router = express.Router();
const userModel = require('../models/user_model');

router.get('/users', (req, res) => {
    userModel.find({}).then(function(user){
    res.send(user);
    });
});

router.post('/users', (req, res) => {
    userModel.create(req.body).then(function(user){
        res.send('Successfully registered!');
        console.log(user);
    });
});

module.exports = router;
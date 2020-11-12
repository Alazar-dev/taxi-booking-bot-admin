const express = require('express');
const router = express.Router();
const customerModel = require('../models/user_model');

router.get('/users', (req, res) => {
    customerModel.find({}).then(function(user){
    res.send(user);
    });
});

router.post('/users', (req, res) => {
    customerModel.create(req.body).then(function(user){
        res.send('Successfully registered!');
        console.log(user);
    });
});

module.exports = router;
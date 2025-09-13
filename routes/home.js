const express = require('express');

const home = express.Router();

home.get('/' , (req,res) => {
 
    res.send(`<h1>Server running on 5000`);


})

module.exports = home;


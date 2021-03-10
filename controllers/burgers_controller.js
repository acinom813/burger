const express = require('express');

const router = express.Router();

//Import the model to use its database function
const burger = require('models/burger.js');

//Create all our routes and set up logic within routes where required

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject ={
          burger: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject); 
    });
});



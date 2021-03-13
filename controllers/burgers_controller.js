const express = require('express');

const router = express.Router();

//Import the model to use its database function
const burger = require('../models/burger.js');

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
router.post('/api/burger', (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false], (result) => {
        //send back id
        res.redirect("/")
    });
});
router.put('/api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.updateOne( 
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
             
            res.json(result)
        }); 
     });

     //Export routes for server.js to use
     module.exports = router;


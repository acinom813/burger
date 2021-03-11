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
    burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], (result) => {
        //send back id
        res.json({id: result.insertId});
    });
});
router.put('/api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition);

    burger.update( 
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changeRows === 0) {
                //If no rows changed, then ID doesn't exist
                return res.status(404).end;
            }
            res.status(200).end();
        }); 
     });

     //Export routes for server.js to use
     module.exports = router;


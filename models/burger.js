//Import ORM to create functions that interact with database
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burger', (res) => cb(res));
    },
    
    //The variables cols and vals are arrays
    insertOne(cols, vals, cb) {
        orm.insertOne('burger', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne('burger', objColVals, condition, (res) => cb(res));
    },
};





//Export the orm object for the model
module.exports = burger;
const connection = require('./connection.js');

//Helper function for SQL syntax to add question mark in query
const printQuestionMarks = (num) => {
    const arr = [];

    for(let i=0; i< num; i++) {
        arr. push('?');
    }
    //?,?
    return arr.toString();
};

//Helper function to convert oject key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
    
    //Loop through keys and push key/value as a string into arr
    for (const key in ob) {
        let value = ob[key];
        //skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
        //if string with spaces, add quotations (Avocado Burger --> 'Avocado Burger')
            if(typeof value === 'string' && value.indexOf(' ') >=0) {
                value = `'${value}'`;
            }
            arr.push(`${key} = ${value}`);
         }
     }
        //Translate array of strings into a single comma-separated string
        return arr.toString();
};

//Object for all SQL statement functions
const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne(table,cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

       queryString += ' (';
       queryString += cols.toString();
       queryString += ')';
       queryString += 'VALUES (';
       queryString += printQuestionMarks(vals.length);
       queryString += ') ';

       console.log(queryString);
       connection.query(queryString, vals, (err, result) =>{
           if (err) {
               throw err;
           }
           cb(result);
       });

    },
    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
};




//Exports the orm object for the model 
module.exports = orm;
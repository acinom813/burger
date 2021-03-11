--Drops the programming_db if it already exists--
DROP DATABASE IF EXISTS burgers_db;

--Create the DB "burgers_db"
CREATE burgers_db;

--Use the DB burgers_db for all the rest of the script
USE burgers_db;

--Created the table "burger" with 3 fields
CREATE TABLE burger (
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,  
    PRIMARY KEY (id)
);



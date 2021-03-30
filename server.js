const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();

//Serve static content for the app from the public directory
app.use(express.static(__dirname + 'public'));

//Parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and give the server access
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

//Start server to begin listening to client requests
app.listen(PORT, () =>
 console.log(`server listening on: http://localhost:${PORT}`)
);

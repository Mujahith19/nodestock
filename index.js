// stock market portfolio

const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars',engine());
app.set('view engine', 'handlebars');

const otherstuff = "hello this is otherstuff!";


// Set Handlebars Routes
app.get('/', function (req, res) {
    res.render('home', {
    	stuff: otherstuff
    });
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT))


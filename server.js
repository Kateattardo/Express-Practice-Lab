// required modules
const express = require('express');
const path = require('path');

//require database
const labsDB = require('./data/labs-db');

// Create our express app
const app = express();


// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
  
  
// Mount middleware (app.use)

// Define a "root" route directly on app to home page
app.get('/', function(req, res) {
    res.redirect('/home');
  });

//mount routes
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});


app.get('/home', function (req, res) {
    //never begin the name of the template with a foward /
    res.render('home');
  });

  app.get('/labs', function(req, res) {
    res.render('labs/index', {
      labs: labsDB.getAll()
    });
  });


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
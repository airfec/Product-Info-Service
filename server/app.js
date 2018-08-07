// HANDLE SERVER CALLS, RELAY TO DB CONTROLLER?
// question: what is res.sendFile() for?

const express = require('express');
const routes = require('./../routes');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('port', process.env.PORT || 3003); //prod vs test environment switch

app.get('/', function(req, res) {
  res.redirect('/rooms/1');
});

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.get('/rooms/:id', function(req, res) {
  const reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});

//using routes
app.use(jsonParser);
app.use('/api', routes);

module.exports = app;


/*
Create / POST - create a new item
Read / GET - read an item
Update / PUT - update an item
Delete / DELETE - delete an item
*/


// // CREATE
// app.post('/rooms/:id', function(req, res) {
//   console.log('hello POST in app.js');

//   // const reactPath = path.join(__dirname, '../public/index.html');
//   // res.sendFile(reactPath);
// });

// // UPDATE
// app.put('/rooms/:id', function(req, res) {
//   console.log('hello PUT');
//   // const reactPath = path.join(__dirname, '../public/index.html');
//   // res.sendFile(reactPath);
// });

// // DELETE
// app.delete('/rooms/:id', function(req, res) {
//   res.send('DELETE request to homepage');
//   // const reactPath = path.join(__dirname, '../public/index.html');
//   // res.sendFile(reactPath);
// });

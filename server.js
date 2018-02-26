// var express = require('express');

// // Create our app
// var app = express();

// app.use(express.static('public'));

// app.listen(3000,  function (){
//     console.log(" Express server is up on port 3000")
// })



const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('Server is up')
});
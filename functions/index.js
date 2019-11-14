const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/timestamp', (request, response) => {
  response.send(`${Date.now()}`);
});

app.get('/timestamp-cached', (request, response) => {
  response.set('Cache-Control','public, max-age=300, s-maxage=600');
  response.sent(`${Date.now()}`);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);


  //response.send("Hello from Firebase!");

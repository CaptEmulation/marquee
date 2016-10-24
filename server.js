const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(8888, function (err) {
  if (err) {
     throw new Error(err);
  }
  console.log('App loaded on port 8888');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, CI/CD with PR workflow!');
});

module.exports = app;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json([
    {name: 'Daniel Ferreira'},
    {idade: 25}
  ]);
});

app.listen('1234')
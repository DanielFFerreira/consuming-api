const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  return res.json([
    {name: 'Daniel Ferreira'},
    {idade: 25},
    {cidade: 'Bebedouro'},
    {estado: 'SP'}
  ]);
});

app.listen('1234')
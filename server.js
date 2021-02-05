const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  return res.json([
    {name: 'Daniel Ferreira'},
    {cidade: 'Bebedouro'},
    {estado: 'SP'}
  ]);
});

app.listen('4567')
 const express = require('express')
 const app = express()

 app.get('/', (req, res) => {
  return res.send({ message: 'Tudo Ok com o metódo GET!'})
 });

 app.post('/', (req, res) => {
  return res.send({ message: 'Tudo Ok com o metodo POST!'})
 });

 app.listen(3000)

 module.exports = app
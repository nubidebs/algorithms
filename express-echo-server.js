/* 6 kyu
* https://www.codewars.com/kata/62bf6fa7eccf8e000f9cae60
* Express: Echo Server
*/

const express = require('express');
const app = express(); // be sure to use the variable `app`
app.use(express.json());

app.get('/', (req, res) => {
  const message = req.query.message;

  if (typeof message !== 'string') {
    res.setHeader('content-type', 'text/plain');
    return res.status(422).send('Unprocessable Entity');
  }
  res.status(200).send({ message });
});

app.post('/', (req, res) => {
  const message = req.body.message;

  if (message === undefined || typeof message !== 'string') {
    res.setHeader('content-type', 'text/plain');
    return res.status(422).send('Unprocessable Entity');
  }

  return res.json({ message });
});

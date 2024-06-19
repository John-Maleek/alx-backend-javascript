/* eslint-disable comma-dangle */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

if (process.argv.length < 3) {
  throw new Error(
    'name of the database must be passed as argument of the file'
  );
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((resp) => {
      res.send(`This is the list of our students\n${resp.msg}`);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

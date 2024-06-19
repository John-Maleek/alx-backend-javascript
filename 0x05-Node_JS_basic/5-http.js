/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
const process = require('process');
const http = require('http');
const fs = require('fs');

function getList(studentArray) {
  return studentArray.map((str) => str.split(',')[0]).join(', ');
}

const countStudents = (path) =>
  new Promise((res, rej) => {
    fs.promises.readFile(path, 'utf-8', async (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }

      const lines = await data.split('\n').splice(1);
      const CSStudents = lines.filter((str) => str.includes('CS'));
      const SWEStudents = lines.filter((str) => str.includes('SWE'));

      console.log(`Number of students: ${lines.length}`);
      console.log(
        `Number of students in CS: ${CSStudents.length}. List: ${getList(
          CSStudents
        )}`
      );
      console.log(
        `Number of students in SWE: ${SWEStudents.length}. List: ${getList(
          SWEStudents
        )}`
      );
    });
  });

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/students': {
      res.end(
        `This is the list of our students\n ${countStudents(process.argv[2])}`
      );
      break;
    }
    default:
      res.end('Hello Holberton School!');
  }
});

app.listen(port, hostname, () => {
  console.log('Listening to requests on port 1245');
});

module.exports = app;

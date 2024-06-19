/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
const http = require('http');
const fs = require('fs');

if (process.argv.length < 3) {
  throw new Error(
    'name of the database must be passed as argument of the file'
  );
}

function getList(studentArray) {
  return studentArray.map((str) => str.split(',')[0]).join(', ');
}

const countStudents = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').splice(1);
      const CSStudents = lines.filter(
        (str) => str.includes('CS') && str.split(',').length === 4
      );
      const SWEStudents = lines.filter(
        (str) => str.includes('SWE') && str.split(',').length === 4
      );

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
      resolve({
        msg: `Number of students: ${lines.length}\nNumber of students in CS: ${
          CSStudents.length
        }. List: ${getList(CSStudents)}\nNumber of students in SWE: ${
          SWEStudents.length
        }. List: ${getList(SWEStudents)}`,
      });
    });
  });

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  switch (req.url) {
    case '/students': {
      countStudents(process.argv[2])
        .then((resp) => {
          res.end(`This is the list of our students\n${resp.msg}`);
        })
        .catch((err) => console.log(err));
      break;
    }
    default:
      res.end('Hello Holberton School!');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

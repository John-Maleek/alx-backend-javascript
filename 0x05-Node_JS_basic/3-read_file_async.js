/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
const fs = require('fs');

function getList(studentArray) {
  return studentArray.map((str) => str.split(',')[0]).join(', ');
}

const countStudents = (path) =>
  new Promise((res, rej) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }

      const lines = data.split('\n').splice(1);
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

module.exports = countStudents;

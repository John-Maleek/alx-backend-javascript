/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
const fs = require('fs');

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
        totalStudents: lines.length,
        CSStudents,
        SWEStudents,
        msg: `Number of students: ${lines.length}\nNumber of students in CS: ${
          CSStudents.length
        }. List: ${getList(CSStudents)}\nNumber of students in SWE: ${
          SWEStudents.length
        }. List: ${getList(SWEStudents)}`,
      });
    });
  });

module.exports = countStudents;

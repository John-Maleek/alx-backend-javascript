/* eslint-disable comma-dangle */
const fs = require('fs');

function getList(studentArray) {
  return studentArray.map((str) => str.split(',')[0]).join(', ');
}

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n').splice(1);

    const CSStudents = data.filter(
      (str) => str.includes('CS') && str.split(',').length === 4
    );

    const SWEStudents = data.filter(
      (str) => str.includes('SWE') && str.split(',').length === 4
    );

    console.log(`Number of students: ${data.length}`);
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

countStudents('database.csv');

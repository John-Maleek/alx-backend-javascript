/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
const fs = require('fs');

function getList(studentArray) {
  return studentArray.map((str) => str.split(',')[0]).join(', ');
}

const readDatabase = (path) =>
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

      resolve({
        CS: getList(CSStudents).split(','),
        SWE: getList(SWEStudents).split(','),
      });
    });
  });

export default readDatabase;

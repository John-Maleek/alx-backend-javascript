/* eslint-disable comma-dangle */
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const firstLine = 'This is the list of our students';
        response
          .status(200)
          .send(
            `${firstLine}\nNumber of students in CS: ${data.CS.length}. List: ${data.CS}\nNumber of students in SWE: ${data.SWE.length}. List: ${data.SWE}`
          );
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((data) => {
        const names = data[major];
        response.status(200).send(`List: ${names}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
export default function updateStudentGradeByCity(list, city, newGrades) {
  if (Array.isArray(list)) {
    return list
      .filter((el) => el.location === city)
      .map((item) => {
        item.grade = 'N/A';
        for (const entry of newGrades) {
          if (item.id === entry.studentId) {
            item.grade = entry.grade;
          }
        }
        return item;
      });
  }
  return [];
}

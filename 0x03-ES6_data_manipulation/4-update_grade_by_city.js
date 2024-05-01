/* eslint-disable comma-dangle */
export default function updateStudentGradeByCity(list, city, grades) {
  if (Array.isArray(list)) {
    return list
      .filter((item) => item.location === city)
      .map((item) => ({
        ...item,
        grade:
          grades.filter((grade) => grade.studentId === item.id)[0] || 'N/A',
      }));
  }
  return [];
}

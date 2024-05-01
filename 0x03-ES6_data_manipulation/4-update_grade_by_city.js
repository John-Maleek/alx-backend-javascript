/* eslint-disable comma-dangle */
export default function updateStudentGradeByCity(list, city, newGrades) {
  if (Array.isArray(list)) {
    return list
      .filter((item) => item.location === city)
      .map((item) => ({
        ...item,
        grade:
          newGrades.filter((grade) => grade.studentId === item.id)[0] || 'N/A',
      }));
  }
  return [];
}

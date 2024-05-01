export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list) && typeof city === 'string') {
    return list.filter((item) => item.location === city);
  }
  return [];
}

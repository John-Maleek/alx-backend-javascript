export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    return list.reduce((acc, curr) => acc + curr.id, 0);
  }
  return 0;
}

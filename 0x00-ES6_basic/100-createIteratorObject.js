export default function createIteratorObject(report) {
  const objKeys = Object.keys(report.allEmployees);
  let arr = [];
  for (const entry of objKeys) {
    arr = [...arr, ...report.allEmployees[entry]];
  }
  return arr[Symbol.iterator]();
}

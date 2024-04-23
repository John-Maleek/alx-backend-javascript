export default function iterateThroughObject(reportWithIterator) {
  let arr = [];
  for (const item of reportWithIterator) {
    arr = [...arr, item];
  }
  return arr.join(' | ');
}

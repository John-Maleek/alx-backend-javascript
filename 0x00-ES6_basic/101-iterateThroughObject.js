export default function iterateThroughObject(reportWithIterator) {
  let arr = [];
  for (let item of reportWithIterator) {
    arr = [...arr, item];
  }
  return arr.join(" | ");
}

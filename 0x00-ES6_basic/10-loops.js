export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let str of array) {
    str = appendString + str;
    arr.push(str);
  }

  return arr;
}

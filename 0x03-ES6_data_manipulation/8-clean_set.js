/* eslint-disable comma-dangle */
export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const arr = [];
    set.forEach((value) => {
      if (value.startsWith(startString) && typeof value === 'string') {
        arr.push(value.slice(startString.length));
      }
    });
    return arr.join('-');
  }
  return '';
}

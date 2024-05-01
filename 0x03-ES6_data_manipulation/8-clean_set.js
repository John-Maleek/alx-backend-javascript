/* eslint-disable comma-dangle */
export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string' && set instanceof Set) {
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

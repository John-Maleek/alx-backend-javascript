/* eslint-disable comma-dangle */
export default function cleanSet(set, startString) {
  if (startString) {
    const arr = Array.from(set)
      .filter((el) => el.startsWith(startString))
      .map((en) => en.replace(startString, ''));
    return arr.join('-');
  }
  return '';
}

export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array) && array.length > 0 && set instanceof Set) {
    const arraySet = new Set(array);
    return arraySet.isSubSetOf(set);
  }
  return false;
}

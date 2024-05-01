export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array) && array.length > 0 && set instanceof Set) {
    const arraySet = new Set(array);
    return set.isSupersetOf(arraySet);
  }
  return false;
}

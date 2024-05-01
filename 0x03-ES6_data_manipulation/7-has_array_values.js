export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array) && set instanceof Set) {
    const arraySet = new Set(array);
    return set.isSupersetOf(arraySet);
  }
  return false;
}

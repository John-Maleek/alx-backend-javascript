export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array)) {
    const arraySet = new Set(array);
    return arraySet.isSubsetOf(set);
  }
  return false;
}
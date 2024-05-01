export default function setFromArray(array) {
  if (Array.isArray(array)) {
    const set = new Set(array);
    return set;
  }
  return new Set();
}

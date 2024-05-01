let calls = 0;

const weakMap = new WeakMap();

function queryAPI(endPoint) {
  calls += 1;
  if (calls >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endPoint, calls);
}

export { weakMap, queryAPI };

export const weakMap = new WeakMap();

let calls = 0;

export function queryAPI(endPoint) {
  if (weakMap.get(endPoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  calls += 1;
  weakMap.set(endPoint, calls);
}

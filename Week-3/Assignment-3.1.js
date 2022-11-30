function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args.toString();

    if (cache.has(key)) return cache.get(key);
    else {
      cache.set(key, fn(...args));
      return cache.get(key);
    }
  };
}

function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

const gcdM = memoize(gcd);

console.log(gcdM(12, 2));
console.log(gcdM(45, 66));

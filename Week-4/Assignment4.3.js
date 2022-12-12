const fibonacci = {
  n: 7,
  [Symbol.iterator]() {
    let i = 1,
      first = 0,
      last = 0;
    return {
      next: () => {
        if (i++ <= this.n) {
          [first, last] = [last, first + last || 1];
          return { value: first, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let val of fibonacci) {
  console.log(val);
}

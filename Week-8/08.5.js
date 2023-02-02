//? 3   4   5   1   0   2   6

var nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const map = new Map();

  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  return nums1.map((num) => (map.has(num) ? map.get(num) : -1));
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

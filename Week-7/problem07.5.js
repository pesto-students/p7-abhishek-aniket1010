//! Input: arr[] = {5, 20, 3, 2, 50, 80}, n = 78
//! Output: Pair Found: (2, 80)

var findPair = (arr, n) => {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (arr[j] - arr[i] == n) {
      return 1;
    } else if (arr[j] - arr[i] > n) {
      i++;
    } else {
      j++;
    }
  }
  return 0;
};

// Time Complexity - O(NlogN) to sort the array
// Space Complexity - O(1)

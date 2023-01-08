var maxSubArray = function (nums) {
  var sum = 0;
  var maxi = Number.MIN_SAFE_INTEGER;

  for (let num of nums) {
    sum += num;
    maxi = Math.max(sum, maxi);
    if (sum < 0) sum = 0;
  }
  return maxi;
};

// Time Complexity-O(N) where N is the size of nums array
// Space Complexity-O(1)

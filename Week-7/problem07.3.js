var sortColors = function (nums) {
  var ini = 0;
  for (let i in nums) {
    if (nums[i] == 0) {
      let swap = nums[ini];
      nums[ini] = 0;
      nums[i] = swap;
      ini++;
    }
  }
  for (let i in nums) {
    if (nums[i] == 1) {
      let swap = nums[ini];
      nums[ini] = 1;
      nums[i] = swap;
      ini++;
    }
  }
};

// Time Complexity-O(n)
// Space Complexity-O(1)
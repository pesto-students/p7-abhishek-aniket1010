var threeSum = function (nums) {
  let ans = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let low = i + 1;
    let high = nums.length - 1;
    let target = 0 - nums[i];
    while (low < high) {
      if (nums[low] + nums[high] === target) {
        ans.push([nums[low], nums[high], 0 - target]);
        while (low < high && nums[low] === nums[low + 1]) low++;
        while (low < high && nums[high] === nums[high - 1]) high--;

        low++;
        high--;
      } else if (nums[low] + nums[high] < target) low++;
      else high--;
    }
  }
  return ans;
};

let nums = [-1, 0, 1, 2, -1, -4];
let ans = threeSum(nums);
console.log(ans);

// Time Complexity - O(n^2)
// Space Complexity - O(M) where M is the number of triplets , this is used to return the answer

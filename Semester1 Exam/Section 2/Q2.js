let nums = [4, 2, 1, 2, 1];

function findUniqueNum(nums) {
  let uniqueNum = 0;
  for (let i = 0; i < nums.length; i++) {
    uniqueNum ^= nums[i];
  }
  return uniqueNum;
}

console.log(findUniqueNum(nums));

function twoSum(nums, target) {
  // your code here
  let record = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (record[nums[i].toString()] !== undefined) {
      return [record[`${nums[i]}`], i];
    }
    record[`${difference}`] = i;
  }
  return -1;
}

module.exports = { twoSum }

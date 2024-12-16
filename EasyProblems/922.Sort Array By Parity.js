var sortArrayByParityII = function (nums) {
  let even = 0;
  let odd = 1;
  let arr = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr[even] = nums[i];
      even += 2;
    }
    else {
      arr[odd] = nums[i];
      odd += 2;
    }
  }
  return arr;
};
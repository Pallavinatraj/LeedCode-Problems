// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


var sortArrayByParity = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] % 2 !== 0 && nums[right] % 2 == 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }

        if (nums[left] % 2 === 0) {
            left++;
        }

        if (nums[right] % 2 !== 0) {
            right--;
        }
    }
    return nums;
};
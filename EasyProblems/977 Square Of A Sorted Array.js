// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]


// Using Bubble sort Approach (But it take O(N^2)
var sortedSquares = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (Math.abs(nums[j]) > Math.abs(nums[j + 1])) {
                swap(nums, j, j + 1);
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }
    return nums;
};
function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
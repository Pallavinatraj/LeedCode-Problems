// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

var findKthLargest = function (nums, k) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] < nums[j + 1]) {
                swap(nums, j, j + 1)
            }
        }
    }
    return nums[k - 1];
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// or 

var findKthLargest = function (nums, k) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - k];
};
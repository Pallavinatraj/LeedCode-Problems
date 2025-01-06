// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.


var maximumGap = function (nums) {
    if (nums.length < 2) return 0;

    nums.sort((a, b) => a - b);

    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let min = nums[i + 1] - nums[i];
        if (min > max) {
            max = min;
        }
    }
    return max;
};
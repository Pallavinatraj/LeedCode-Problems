// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.

var rearrangeArray = function (nums) {
    let positive = 0;
    let negative = 1
    let ans = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans[positive] = (nums[i]);
            positive += 2;
        }
        else {
            ans[negative] = (nums[i]);
            negative += 2;
        }
    }
    return ans;
};
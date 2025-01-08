// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.



var containsDuplicate = function (nums) {
    const uniqueValues = new Set(nums);
    return uniqueValues.size !== nums.length;
};
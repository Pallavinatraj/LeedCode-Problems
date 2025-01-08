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

// Using Two Pointer Approach (it take O(N)
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let arr = new Array(nums.length);
    
  for (let i = nums.length - 1; i >= 0; i--) {
         if (Math.abs(nums[left]) > Math.abs(nums[right])) {
             arr[i] = nums[left] ** 2; 
             left++;
         } else {
             arr[i] = nums[right] ** 2;  
             right--;
         }
    }
   return arr;  
 };
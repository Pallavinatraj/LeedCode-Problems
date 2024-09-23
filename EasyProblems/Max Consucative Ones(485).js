//Max Consucative Ones
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length;
    if (n === 0) return 0; 

    // Helper function to find max consecutive 1s in a linear array
    function maxConsecutiveOnes(arr) {
        let maxCount = 0;
        let currentCount = 0;

        for (let num of arr) {
            if (num === 1) {
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }

        return maxCount;
    }

    // Case 1: Max consecutive 1s in the original array
    let maxInOriginal = maxConsecutiveOnes(nums);

    // Case 2: Max consecutive 1s in the circular array
    // Concatenate the array with itself
    let doubledArray = nums.concat(nums);

    // Find the max consecutive 1s in the doubled array but restrict to the window of original length
    let maxInCircular = 0;
    let currentCount = 0;
    let start = 0;

    for (let i = 0; i < doubledArray.length; i++) {
        if (doubledArray[i] === 1) {
            currentCount++;
        } else {
            currentCount = 0;
        }

        // Ensure the window size does not exceed the length of the original array
        if (i >= n) {
            if (doubledArray[start] === 1) {
                currentCount--;
            }
            start++;
        }

        maxInCircular = Math.max(maxInCircular, currentCount);
    }

    // Return the maximum found in either case
    return Math.max(maxInOriginal, maxInCircular);
};

// Example usage:
const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums)); 

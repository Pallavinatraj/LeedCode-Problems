// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)


var numSubseq = function (nums, target) {
    nums.sort((a, b) => a - b);
    let pow = [];
    pow.push(1);
    let mod = 1e9 + 7;

    for (let i = 1; i < nums.length; i++) {
        pow.push((pow[pow.length - 1] * 2) % mod);
    }

    let i = 0; j = nums.length - 1; res = 0;

    while (i <= j) {
        if (nums[i] + nums[j] > target) {
            j--;
        }
        else {
            res = (res + pow[j - i++]) % mod;
        }
    }
    return res;
};
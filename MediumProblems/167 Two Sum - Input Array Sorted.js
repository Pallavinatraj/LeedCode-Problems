// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].


var twoSum = function (numbers, target) {
    let arr = [];

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let targetValue = numbers[left] + numbers[right];
        if (targetValue === target) {
            arr.push(left + 1, right + 1);
            left++;
            right--;
        }
        else if (targetValue > target) {
            right--;
        }
        else {
            left++;
        }
    }
    return arr;
};
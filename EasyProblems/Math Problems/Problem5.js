// Input: n = 153
// Output: true
// Explanation: Number of digits : 3.
// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153.
// Therefore, it is an Armstrong number.
// Input: n = 12
// Output: false
// Explanation: Number of digits : 2.
// 1 ^ 2 + 2 ^ 2 = 1 + 4 = 5.
// Therefore, it is not an Armstrong number.




class Solution {
    isArmstrong(n) {
        let number = n.toString().split("");
        let digits = number.length;
        let sum = 0;
        for (let i = 0; i < digits; i++) {
            sum += Math.pow(parseInt(number[i], digits));
        }
        return sum === n;
    }
}
class Solution {
    isArmstrong(n) {
        let number = n.toString().split("");
        let lngth = number.length;
        let sum = number.reduce((acc, digits) => acc + Math.pow(parseInt(digits, lngth), 0));

        return sum === n;
    }
}


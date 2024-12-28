Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.


var longestPalindrome = function (s) {
    function sliceS(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            right++;
            left--;
        }
        return s.slice(left + 1, right);
    }

    let largest = '';
    for (let i = 0; i < s.length; i++) {
        let odd = sliceS(i, i)
        if (odd.length > largest.length) {
            largest = odd;
        }

        let even = sliceS(i, i + 1)
        if (even.length > largest.length) {
            largest = even;
        }
    }
    return largest;
};
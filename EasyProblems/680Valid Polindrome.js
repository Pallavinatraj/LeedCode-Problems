// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.




var validPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPolindrome(s, left + 1, right) || isPolindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};
function isPolindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
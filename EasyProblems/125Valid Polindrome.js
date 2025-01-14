  // Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome



var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let str = s.split('').reverse().join('');

    return str === s;
};

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function (s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};
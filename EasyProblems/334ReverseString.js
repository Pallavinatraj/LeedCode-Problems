// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        swap(s, left, right);
        left++;
        right--;
    }
    return s;
};
function swap(s, left, right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

}
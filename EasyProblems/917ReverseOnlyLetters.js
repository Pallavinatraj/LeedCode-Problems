// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

var reverseOnlyLetters = function (s) {
    let left = 0;
    let right = s.length - 1;
    s = s.split("");

    let char = /[a-zA-Z]/g;

    while (left < right) {
        if (s[left].match(char) === null) {
            left++;
            continue;
        }
        if (s[right].match(char) === null) {
            right--;
            continue;
        }
        swap(s, left, right);
        left++;
        right--;
    }
    return s.join("");
};
function swap(s, left, right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
}
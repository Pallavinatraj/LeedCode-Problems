// Input: s = "the sky is blue"
// Output: "blue is sky the"


var reverseWords = function (s) {
    let left = 0;
    let arr = s.trim().split(/\s+/);
    let right = arr.length - 1;

    while (left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }
    return arr.join(' ');
};

function swap(s, left, right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
}


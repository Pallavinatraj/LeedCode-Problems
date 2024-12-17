// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"


var reverseStr = function (s, k) {
    let arr = s.split("");

    for (let i = 0; i < s.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);

        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return arr.join("");
};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
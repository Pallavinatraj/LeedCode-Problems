// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, 
// and this is the only possible move.  The result of this move is that the string is "aaca", 
// of which only "aa" is possible, so the final string is "ca".



var removeDuplicates = function (s) {
    let n = s.length - 1;
    let stack = [];

    for (let i = 0; i <= n; i++) {
        if (stack.length === 0 || stack[stack.length - 1] != s[i]) {
            stack.push(s[i]);
        }
        else {
            stack.pop();
        }
    }
    return stack.join('');
};
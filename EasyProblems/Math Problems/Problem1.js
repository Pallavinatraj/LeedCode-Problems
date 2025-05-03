// Example 1:
// Input: N = 12345
// Output: 5
// Explanation:  The number 12345 has 5 digits.

// Example 2:
// Input: N = 7789
// Output: 4
// Explanation: The number 7789 has 4 digits. 

let count = 0;
function countDegits(N) {
    while (N > 0) {
        count++;
        N = Math.floor(N / 10);
    }
    return count;
}

function main() {
    let numbers = 326789;
    countDegits(numbers);
    console.log(`The number326789 has ${count} digits`);
}
main();
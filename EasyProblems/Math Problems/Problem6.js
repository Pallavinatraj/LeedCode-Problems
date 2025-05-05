// Example 1:
// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
// Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.

// Example 2:
// Input:N =12
// Output: [1, 2, 3, 4, 6, 12]
// Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.   

function divisor(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}
divisor(12);
divisor(36);

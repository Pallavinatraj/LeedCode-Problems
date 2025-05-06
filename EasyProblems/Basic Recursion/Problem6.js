// Sum of first N Natural Numbers
// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

// Example 1:
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15

// Example 2:
// Input: N=6
// Output: 21
// Explanation: 1+2+3+4+5+6=15

// Method - 1: Using Recursion
let sumOfN = (n, sum) => {
    let sum = 0;
    if (n < 1) return sum;
    sumOfN(i - 1, sum + i);
}
sumOfN(5);

// Method - 2: Using Loop
let sumOfN = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1;
    }
    console.log(sum);
}
sumOfN(5);

// Method - 3: Using Math
let sumOfN = (n) => {
    console.log((n * (n + 1)) / 2);
}
sumOfN(5);
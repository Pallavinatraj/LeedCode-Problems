// Examples:

// Example 1:
// Input: X = 5
// Output: 120
// Explanation: 5! = 5*4*3*2*1

// Example 2:
// Input: X = 3
// Output: 6
// Explanation: 3!=3*2*1

// Method1 : Using Recursion Functional way
let total = (n) => {
    if (n <= 1) return;
    let mul = 1;
    return n * (n - 1);
}
total(5);

// Method - 2: Using Loop
let sumOfN = (n) => {
    let mul = 1;
    for (let i = 1; i <= n; i++) {
        mul *= i;
    }
    console.log(mul);
}
sumOfN(5);
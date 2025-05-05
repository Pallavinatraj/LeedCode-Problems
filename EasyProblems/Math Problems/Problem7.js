// Example 1:
// Input:N = 2
// Output:True
// Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).

// Example 2:
// Input:N =10                
// Output: False
// Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.  

function primeNumber(n) {
    if (n <= 1) return false;
    if (n % 2 === 0) return false;

    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            return false;
        }

    }
    return true;
}
primeNumber(2);
primeNumber(10);
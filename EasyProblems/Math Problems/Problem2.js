// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


function reverse(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let rvrsNumber = 0;
    while (x > 0) {
        if (x == "-") {

        }
        let lastDegit = x % 10;
        rvrsNumber = (rvrsNumber * 10) + lastDegit;
        x = Math.floor(x / 10);
    }


    if (rvrsNumber < -Math.pow(2, 31) || rvrsNumber > Math.pow(2, 31) - 1) {
        return 0;
    }
    else {
        return rvrsNumber * sign;
    }
}
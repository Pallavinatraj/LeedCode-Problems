var isPalindrome = function(x) {
    return Number(String(x).split('').reverse().join(''))===x;
};
isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
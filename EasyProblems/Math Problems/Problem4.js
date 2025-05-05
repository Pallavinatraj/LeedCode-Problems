// GCD --Greatest Common Devisor
function GreatestMaxNum(N1, N2) {
    let max = 0;
    for (let i = 1; i < Math.min(N1, N2); i++) {
        if (N1 % i === 0 && N2 % i === 0) {
            max = Math.max(max, i);
        }
    }
    console.log(max);
};
GreatestMaxNum(9, 12);




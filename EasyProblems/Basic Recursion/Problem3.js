// 1 -N Numbers print

function f(i, n) {
    if (i > n) return;
    console.log(i);
    f(i + 1, n)
}
f(1, 3);

function f1(i, n) {
    if (i < n) return;
    f1(i - 1, n)
    console.log(i);

}
f(3, 1);
f1(3, 1);
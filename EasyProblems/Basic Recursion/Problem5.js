function f1(i, n) {
    if (i < 1) return;
    console.log(i);
    f1(i - 1, n)


}
f1(4, 4);

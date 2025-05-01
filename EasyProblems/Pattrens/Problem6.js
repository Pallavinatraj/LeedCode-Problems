// 12345
// 1234
// 123
// 12
// 1

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 6 - i; j++) {
        row += j;
    }
    console.log(row);

}
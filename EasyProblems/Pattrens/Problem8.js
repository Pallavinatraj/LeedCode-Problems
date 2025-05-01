// *********
//  ******* 
//   *****  
//    ***   
//     *   


for (let i = 0; i < 5; i++) {
    let row = "";
    for (let m = 0; m < i; m++) {
        row += " ";
    }
    for (let j = 0; j < 2 * 5 - (2 * i + 1); j++) {
        row += "*";
    }

    for (let k = 0; k < i; k++) {
        row += " ";
    }
    console.log(row);
}

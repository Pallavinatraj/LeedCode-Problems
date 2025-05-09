// Reverse a given Array
// Problem Statement: You are given an array. The task is to reverse the array and print it.

// Example 1:
// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

// Example 2:
// Input: N=6 arr[] = {10,20,30,40}
// Output: {40,30,20,10}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.


// Solution 1: Using an extra array.
let rvrse = (arr) => {
    let arrN = new Array;
    for (let i = arr.length - 1; i >= 0; i--) {
        arrN.push(arr[i]);
    }
    console.log(arrN);
}


let arr = [1, 2, 3, 4, 5];
rvrse(arr);

// Solution 2: Space-optimized iterative method
let rvrse2 = (arr1) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr1[i];
        arr1[i] = arr1[arr1.length - 1];
        arr1[arr1.length - 1] = temp;

    }
    console.log(arr1);
}


let arr1 = [1, 2, 3, 4, 5];
rvrse2(arr1);

// Solution 3: Recursive method
let rvrse3 = (arr2, start, end) => {

    let temp = arr1[start];
    arr1[i] = arr1[end];
    arr1[end] = temp;
    rvrse3(arr2, start + 1, end - 1);
}


let arr2 = [1, 2, 3, 4, 5];
rvrse3(arr2, 0, arr2.length - 1);
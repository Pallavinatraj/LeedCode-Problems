// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// Example 2:
// Input: N=5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting the array is: 1, 2, 3, 4, 5

let selectionSort = (arr)=>{
  for(let i=0; i<arr.length-1; i++){
    let min=i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]<arr[min]){
        min= j;
      }
    }
    swapElement(i , min);
  }
  console.log(arr);
}

function swapElement(a,b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
let arr = [13,46,24,52,20,9];
selectionSort(arr);
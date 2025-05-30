// Given an array of integers called nums,sort the array in non-decreasing order using the bubble sort algorithm and return the sorted array.
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.


// Examples:
// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// Input: nums = [5, 4, 4, 1, 1]
// Output: [1, 1, 4, 4, 5]
// Explanation: 1 <= 1 <= 4 <= 4 <= 5.
// Thus the array is sorted in non-decreasing order.
let bubbleSort=(arr)=>{
 for(let i=0; i<=arr.length-1; i++){
  for(let j=0; j<=arr.length-i-1; j++){
     if(arr[j]>arr[j+1]){
      swapElement(j, j+1, arr); 
     }  
  }
   
}
console.log(arr);
}

function swapElement(j, min, arr){
  let temp = arr[j];
  arr[j] = arr[j+1];
  arr[j+1] = temp;
}

let arr = [7, 4, 1, 5, 3];
bubbleSort(arr);


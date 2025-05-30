// Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.


// Examples:

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// Input: nums = [5, 4, 4, 1, 1]
// Output: [1, 1, 4, 4, 5]
// Explanation: 1 <= 1 <= 4 <= 4 <= 5.
// Thus the array is sorted in non-decreasing order.
let selectionSort=(arr)=>{
 for(let i=0; i<=arr.length-1; i++){
  let min = i;
  for(let j=i+1; j<=arr.length-1; j++){
     if(arr[j]<arr[min]){
      min =j;
     }
    
  }
   swapElement(i, min, arr);
  
}
console.log(arr);
}

function swapElement(i, min, arr){
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}

let arr = [5, 4, 4, 1, 1];
selectionSort(arr);


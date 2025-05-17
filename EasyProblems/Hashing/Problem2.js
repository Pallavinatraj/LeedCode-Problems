// Problem statement: Given an array, we have found the number of occurrences of each element in the array.

// Examples:

// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
// 	        5  2
//         15  1
// Explanation: 10 occurs 3 times in the array
// 	            5 occurs 2 times in the array
//              15 occurs 1 time in the array

let countingNum =  (arr)=>{
  let obj ={};
  for(let num of arr){
    obj[num] = (obj[num] || 0) +1 ;
  }
  console.log(obj);
}

let arr = [10,5,10,15,10,5]
countingNum(arr);

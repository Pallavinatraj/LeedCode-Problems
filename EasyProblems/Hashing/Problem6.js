// Highest Occurring Element in an Array
// Given an array of n integers, find the most frequent element in it i.e., 
// the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, 
// find the smallest of them.

// Please note that this section might seem a bit difficult without prior knowledge on what hashing is, we will soon try to add basics concepts for your ease! If you know the concepts already please go ahead to give a shot to the problem. Cheers!


// Examples:

// Input: arr = [1, 2, 2, 3, 3, 3]
// Output: 3
// Explanation: The number 3 appears the most (3 times). It is the most frequent element.

// Input: arr = [4, 4, 5, 5, 6]
// Output: 4
// Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element.

let highestOccurring =()=>{
    let map ={};
    for(let a of arr){
        map[a]=(map[a] || 0)+1;
    }
    
    let count =-Infinity;
    let value =null;
    for(let b in map){
        if(map[b]>count){
           count = map[b];
           value = b;
        }
    }
    console.log(value);
   
}

// let arr = [1, 2, 2, 3, 3, 3];
let arr = [4, 4, 5, 5, 6];
highestOccurring(arr);
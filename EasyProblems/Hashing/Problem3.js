var majorityElement = function(nums) {
  let obj ={};
  
  for(let num of nums){
    obj[num]=(obj[num] ||0) +1;
  }
  
  let count = 0;
 
  for(let key in obj){
    if(obj[key] >count){
        count = obj[key];
        result = Number(key); 
    }
  }
  return result;
    
};
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
//How Many Numbers Are Smaller Than the Current Number
var smallerNumbersThanCurrent = function(nums) {
    let sorted = [...nums].sort((a,b)=>a-b);
    let countMap = new Map();
    for(let i=0; i<sorted.length; i++){
       if(!countMap.has(sorted[i])){
           countMap.set(sorted[i],i);
       }
    }
   return nums.map(num=>countMap.get(num)) ;
};
smallerNumbersThanCurrent([8,1,3,6,2]);
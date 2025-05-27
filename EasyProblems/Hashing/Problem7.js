var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
      let diff = target - nums[i];
      if(map.has(diff)){
        console.log(map.get(nums[i], i)) ;
      }
      map.set(nums[i],i);
    }
    console.log(map);

    
};
let nums= [2,7,11,15]
twoSum(nums, 9);
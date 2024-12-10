var removeElement = function(nums, val) {
    let value =0;
    for(let n of nums){
       if(n!==val){
         nums[value]= n;
         value++;
       }
    }
  return value; 
    console.log(nums);

};
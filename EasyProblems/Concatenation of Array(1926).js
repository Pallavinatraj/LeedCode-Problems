 //Concatenation of Array
function getConcatenation(nums) {
    let ans = [];
    for(let i=0; i<=nums.length-1; i++){
        ans.push(nums[i]);
    }
    for(let j=0; j<=nums.length-1; j++){
        ans.push(nums[j]);
    }
    console.log(ans);  
}
getConcatenation([1,2,1]);

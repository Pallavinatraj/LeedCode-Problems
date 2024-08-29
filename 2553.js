//Separate the Digits in an Array 
function separateDigits(nums) {
    let ans = nums.join('').split('');
    let answer =[];
    for(let i=0; i<=ans.length-1;i++){
        if(ans[i]!==0){
            answer.push(ans[i]);
        }
    }
    return answer;
};
separateDigits([13,25,83,77]);
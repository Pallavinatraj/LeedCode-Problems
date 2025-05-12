// Hashing 
// Input = [2,1,2,1,3,10,4];
// Output= [2,2,1,1,1];

const findNum = (arr)=>{
   let max = Math.max(...arr);
   let hash = new Array(max+1).fill(0); //Hasing ---> PreComputation
   for(let i=0; i<arr.length; i++){
       newArray[arr[i]]++;
   }

   let result =[];
   for(let j=0; j<arr.length; j++){
      result.push(hash[arr[j]]);
   }
   console.log(result);

}

let arr = [2,1,2,1,3,10,4]
findNum(arr);

const findNum = (arr)=>{
   let mapObj = {} //Map ---> PreComputation
   for(let i=0; i<arr.length; i++){
      mapObj[arr[i]] = (mapObj[arr[i]] ||0 )+1 ;
   }

   console.log(mapObj);

}

let arr = [2,1,2,1,3,10,4]
findNum(arr);
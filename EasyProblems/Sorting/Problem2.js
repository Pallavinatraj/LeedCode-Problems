
let bubbleSort = (arr)=>{
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]>arr[j+1]){
        swapElement(j , j+1, arr);
      }
    }
   
  }
  console.log(arr);
}

function swapElement(a,b, arr){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
let arr = [13,46,24,52,20,9];
bubbleSort(arr);
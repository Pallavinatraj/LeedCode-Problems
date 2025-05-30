let insertionSort=(arr)=>{
 for(let i=0; i<=arr.length-1; i++){
 j =i;
 while(j>0 && arr[j-1] > arr[j]){
   swapElement(j-1, j, arr);
   j--;
 }
   
}
console.log(arr);
}

function swapElement(j, min, arr){
  let temp = arr[j];
  arr[j] = arr[j+1];
  arr[j+1] = temp;
}

let arr = [7, 4, 1, 5, 3];
insertionSort(arr);
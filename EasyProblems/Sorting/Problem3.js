
let insertionSort = (arr)=>{
  for(let i=0; i<=arr.length-1; i++){
   j=i;
   while(j>0 && arr[j-1] > arr[j]){ 
    swapElement(j-1, j, arr)
    j--;
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
insertionSort(arr);
function pivot(arr,start=0,end=arr.length-1){
   const swap = (array,idx1,idx2)=>{
       [array[idx1],array[idx2]]=[array[idx2],array[idx1]]
   }
    // Assuming picot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
    for(var i = start+1;i<=arr.length;i++){
        if(pivot>arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;  
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right);
        //For left side
        quickSort(arr,left,pivotIndex-1);
        //For right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
console.log(quickSort([4,8,2,1,5,7,6,3]));
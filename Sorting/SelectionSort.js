function selectionSort(arr){
    let temp;
    for(let i=0;i<arr.length-1 ;i++){
        let min = i;
        console.log(arr,arr[i],arr[i+1]);
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
               min=j;
            }
        }
        if(i!==min){
            temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr
}

console.log(selectionSort([5,3,4,2,1]));
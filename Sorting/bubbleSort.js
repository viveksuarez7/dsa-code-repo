function bubble(arr){
    let noSwaps;
    for(let i=arr.length-1;i>=0;i--){
        noSwaps=true;
        for(j=0;j<i;j++){
            console.log(arr,arr[j],arr[j+1]);
            if(arr[j]>arr[j+1]){
               let temp
               temp=arr[j];
               arr[j]=arr[j+1];
               arr[j+1]=temp;
               noSwaps=false;
            //    console.log(arr);
            }
            if(noSwaps) break;
        }
    }
    return arr;
}

console.log(bubble([5,1,2,3,4]));
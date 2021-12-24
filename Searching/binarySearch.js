function binarySearch(arr,val){
    let left=0;
    let right = arr.length-1;
    let mid=Math.floor((left+right)/2);
    while(left<right){        
        if(val>arr[mid]){
            left=mid+1; 
        }
        else if(val<arr[mid]){
            right=mid-1;
        }
        else{
            return mid;
        }
        mid=Math.floor((left+right)/2);
    }
  if(arr[mid]===val) {return mid;
}
else{
    return console.log('Not found')
}}

console.log(binarySearch([1,2,3,4,5],3)); 
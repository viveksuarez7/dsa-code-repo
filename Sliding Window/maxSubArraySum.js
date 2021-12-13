/* This solution takes O(n^2) time and is naive approach */
function maxSubArraySum(arr,num){
    if(num>arr.length)
    return null;

var max = -Infinity;
for(let i=0;i<arr.length-num+1;i++){
    let temp=0;
    for(let j=0;j<num;j++){
        temp+=arr[i+j];
    }
    if(temp>max){
        max=temp;
    }
}
return max;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3));
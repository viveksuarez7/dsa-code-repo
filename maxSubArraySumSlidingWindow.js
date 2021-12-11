// This is a solution for maximum SubArray sum using sliding window.Time Complexity turns out to be O(n)
function maxSubArraySum(arr,num){
    if(num>arr.length) return null;
    let tempSum=0;
    let maxSum=0;
    for(let i=0;i<num;i++){
        maxSum+=arr[i];
    }
    tempSum=maxSum;
    for(i=num;i<arr.length;i++){
        tempSum=tempSum-arr[i-num]+arr[i];
        maxSum=Math.max(maxSum,tempSum);
    }
return maxSum;
}
console.log(maxSubArraySum([-3,4,0,-2,6,-1],2));


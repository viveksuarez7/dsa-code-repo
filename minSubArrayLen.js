function minSubArrayLen(nums,sum){
    let total=0;
    let start=0;
    let end=0;
    let minLen = Infinity;

    while(start<nums.length){
        if(total<sum && end<nums.length){    //if current window doesnt add upto the sum move window to the right
            total+=nums[end];
            end++;
        }
        else if(total>=sum){
            minLen=Math.min(minLen,end-start);  //if current window adds upto atleast the sum we can make it shorter               
            total-=nums[start];
            start++;
        }
        else{
            break; //if total is not greater than sum but we reach the end;
        }
        
    }
    return minLen === Infinity?0:minLen;
}
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52));
function getDigit(num,dig){
    return  Math.floor(num/(Math.pow(10,dig)))%10; 
}
function getCount(num){
    if(num===0) return 1 ;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}
function mostDigits(nums){
    maxNumber = Math.max(...nums);
    return getCount(maxNumber);
}
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0;k<maxDigitCount;k++){
        let digitBucket = Array.from({length:10},()=>[]);
        console.log(digitBucket);
        for(let i=0;i<nums.length;i++){
            let digit = getDigit(nums[i],k);
            digitBucket[digit].push(nums[i]);
        }
        console.log(digitBucket);
        nums = [].concat(...digitBucket);
    }
  return nums;
}
console.log(radixSort([57,78,2,1]));
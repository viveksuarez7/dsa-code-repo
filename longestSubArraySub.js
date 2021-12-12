function longestSubArray(str){           //This is a brute force method for this problem and takes O(n^2) time
    let count =0;
    for(i=0;i<str.length;i++){
        let char = str.charAt(i);
        let set = new Set([char]);
        for(j=i+1;j<str.length;j++){
            let char = str.charAt(j);
            if(set.has(char)){
                break;
            }
            else{
                set.add(char);
            }
            count=Math.max(count,set.size);
        }
    }
    return count;
}
console.log(longestSubArray(''));
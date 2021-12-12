function longestSubArray(str){
    let count = 0;
    let i = 0;
    let j = 0;
    let set = new Set();
    let n = str.length;
    while(i<n&&j<n){
        let char = str.charAt(j);
        if(!set.has(char)){
            set.add(char);
            j++;
            count = Math.max(count,j-i);
        }
        else{
            set.delete(str.charAt(i));
            i++;
        }

    }
    return count;

}
console.log(longestSubArray('rithmschool'));
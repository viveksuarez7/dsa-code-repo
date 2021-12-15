// function isPallindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPallindrome(str.slice(1,-1));
//     return false;
// }
// console.log(isPallindrome('tacocat'));

var isPalindrome = function(x) {
    let rev=0;
    let temp=x;
    let rem=0;                       
    while(temp>0){
        rem=temp%10;
         temp=parseInt(temp/10); 
        rev=(rev*10)+rem;
          
        console.log(rev);       
    }
    if(x===rev)
        return true;
    else
        return false;
};

console.log(isPalindrome(121));
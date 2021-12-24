function naiveStringSearch(str,str1){
     let match=0;
    for(let i=0;i<str.length;i++){
        let count=0;
        for(let j=0;j<str1.length;j++){
            if(str[i+j]!==str1[j]){
                break;
            }
            else{
                count++ 
            }
    }
     if(count===str1.length){
                match++;               
            }
}
return match;
}
console.log(naiveStringSearch('warsawsaw','pop'));
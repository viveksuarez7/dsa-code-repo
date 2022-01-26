var finalValueAfterOperations = function(operations) {
    let X = 0;
    for(let i=0;i<operations.length;i++){
        if(operations[i]==='X++'){
        X++;
    }
     if(operations[i]==='++X'){
        X++;
    }
    if(operations[i]==='--X'){
        X--;
    }
    if(operations[i]==='X--'){
        X--;
    }
    }
    return X;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))

// function countBs(str){
//    let count = 0;
//    for(let i = 0 ;i<str.length;i++){
//        if(str[i]==='B'){
//            count++;
//        }
//    }
//    return count;
// }
// console.log(countBs('BBC'));

// function countChar(str1,str2){
//     let count = 0;
//    for(let i = 0 ;i<str1.length;i++){
//        if(str1[i]===str2){
//            count++;
//        }
//    }
//    return count;
// }
// console.log(countChar("kakkerlak", "k"));


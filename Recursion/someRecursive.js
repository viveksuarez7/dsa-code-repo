const isOdd = val => val % 2 !== 0;
function someRecursive(arr,isOdd){
    if(arr.length===0)
    return true;
    if(isOdd===true){
        return someRecursive(arr.splice(1),isOdd); 
    }
    return false;
}
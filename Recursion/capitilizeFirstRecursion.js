function capitalizeFirst(arr){
    newArray = [];
    value=arr[0];

    if(arr.length===0) return newArray;
     
    else{
        newArray.push(value.replace(value[0],value[0].toUpperCase()))
    }

    return newArray=newArray.concat(capitalizeFirst(arr.slice(1)));
    
}

console.log(capitalizeFirst(['car','taco','banana']));
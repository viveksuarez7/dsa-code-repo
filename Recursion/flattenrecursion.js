function flatten(arr){
    let value=arr[0];
    let newArr=[];

    if(arr.length===0) return newArr;

    if(typeof(value)==='number'){
        newArr.push(value);
    }
    if(Array.isArray(value)){
        let nest = flatten(value);
        newArr=newArr.concat(nest);
    }
    return newArr=newArr.concat(flatten(arr.slice(1)));
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));


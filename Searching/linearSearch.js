function linearSearch(arr,val){
 for(let i = 0;i<arr.length;i++){
     if(arr[i]===val){
         return i;
     }
 }
 return console.log('not found');
}

console.log(linearSearch([1,2,4,5,6,7],7));



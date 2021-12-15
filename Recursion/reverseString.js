function reverse(str){
      let arrStr=str.split("");
      let newArr=[];
      while(arrStr.length>0){
          newArr.push(arrStr[arrStr.length-1]);
          arrStr.length--;
      }
            return newArr.join("");
}

console.log(reverse('Vivek'));
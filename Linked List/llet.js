var arr = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];

console.log(arr.flat().filter(x=>x<0).length);
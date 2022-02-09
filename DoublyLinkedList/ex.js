// let rel = new RegExp("ABC");
// console.log(typeof rel)
// let eighteenPlus = /eighteen\+/
// console.log(eighteenPlus);
// console.log(/abc/.test("abcde"))
// console.log(/abc/.test("abxde"));
// let notBinary = /[^01]/;
// console.log(notBinary.test("110011001101"));

// console.log(/'\d+'/.test("'123'"))
// console.log(/'\d+'/.test("' '"))
// console.log(/'\d*'/.test("'123'"))
// console.log(/'\d*'/.test("''"))
let neighbour = /neighbou?r/;
console.log(neighbour.test("neighbor"));

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("01-30-2022 8:45"));
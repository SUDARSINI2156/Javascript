// comparison operators

let a = 10;
let b = 12;

console.log(a>=b);
console.log(a!=b);

console.log("12"*'3');

//comparison operator return boolean

//unicode value 
let x = 'sudar';
let y = 'sudar';
let result = x!=y;
console.log(result);
//here instead of compared with value it compared unicode values
//ascii value similar

let m = '12';
let n = '13';
console.log(m<n);


//it say true bcz of inconsistency
console.log('0'==0);//true

//strict conversion without changing datatype
console.log('0'===0);//false


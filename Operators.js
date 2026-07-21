// 7 + 3  =10

//+,= = operator

//7, 3 are operands

//unary

let x  = 1;
x = +x;
console.log(x);

//binary +,-,*,/,%,**

let a = 10,b=12;
let sum = a**b;
console.log(sum);

//concatenation

let string1 = "Hii sudar";
let string2 = "How are you";
let join = string1+string2;
console.log(join);

//concatenation with typecasting
let aa = '12';
let bb = '13';
let sums = +aa + +bb;//the unary 
//convert the datatype type conversion done using unary +
//so unary + not work - will work
console.log(sums);

//assignment operator

//chaining assignment
let a=b=c=12;
console.log(a,b,c);

//modify in place

let xx = 12;
xx=xx+5;// or xx+=5
console.log(xx);

//increment operator

let d = 112;
d++;
console.log(d);

//decrement 

let df = 113;
df--;
console.log(df);

//post increment/decrement

//it print and then increase or decrease

let w = 12;
console.log(++w);

console.log(--w);
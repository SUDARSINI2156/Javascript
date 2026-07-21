//typeconversions

//ths js engine itself convert the type conversion 
// then it is implici type conversion

console.log('12'/'3');//work
console.log('12'*'3');//work
console.log('12'-'3');//work
console.log('12'+'12');//not work either it concat

//When we change the type conversion which is known as explicit 

let age = null;
console.log( age+2);
age = Number(age);
console.log( age);

//when a string is a word to number return "nan"
// if number no pronlem 
// if bool then it take that as number like 0 an 1
// undefined ku nan 

//null ku 0

// unknown like 12k also nan

//int to bool means 0 means false
//other number anything pos and negative also means 1

//string to bool means any string even space it produce "true",even it is false it say true
//if blank "without space then false"
//logical in js

//AND , OR, NOT, NULL COALESCING

console.log(8100000&&2);//return 2 nd value,if 1st 0 then return 0
console.log(23||89);//return first;if 0 then 2nd
console.log(!0);//true,any other number false
//eligibility for mrg
let age = 28;
let gender = 'm';
if(age>21||age>=18&&gender=='f'){
    console.log("eligible")
}
//null coalescing
//it is used when the value is null or undefined thn it 
//print using this null coalesing operator else print original value
let ages=17;
let current_age= ages??19;
console.log(current_age);

//trivia
console.log(null||0||undefined);
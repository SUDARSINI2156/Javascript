//basic datatype in js are 8


// number data type

let pi = 3.14;
let prime = 2;
//console.log(pi,prime);
console.log(typeof(pi));
console.log(typeof(prime));

//special numeric value
let infi = Infinity;
let neginfi = -Infinity;
console.log(infi);
console.log( neginfi);

let nan = NaN;

//used to find type of the variable
console.log(typeof nan);//also type of a number

//when add any integer to
// nan it also became nan

nan = nan+2;
console.log(nan);


//exceptions in nan its nan for all number except 0
nan = nan**4;
console.log(nan);

//exceptions in nan
//anything power 0 is 1
nan = nan**0;
console.log(nan);

console.log(1/0);
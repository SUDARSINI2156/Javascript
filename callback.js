function operation(op,a,b){
return op(a,b);
}
let add = (a,b)=> a+b;
let sub = (a,b)=>a-b;

console.log(operation(add,2,3));

//passing function as a argument

//call back is nothing but  while calling a function sending another function as an argument 
//which is known as call back
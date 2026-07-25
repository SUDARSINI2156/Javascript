/* let a = 5;
let b = a;

console.log(a,b);

b = 10;
console.log(a,b); */
/* 
let a={
    name:'sudar',
    age:20
}
let b =a;
console.log(a,b);
b.age = 30;//change both a and b value 
//insted change b only

//this is bczz it rely on a object so change if b 
//rely on other object then no change to a
console.log(a,b); */



//here a age change to 17 

const a = {
    name:'pras',
    age:16
}
a.age=17;
console.log(a);//17

//because it is constant when the whole  object change
//but remain same when property change

//garbage value create address it is in location
//in another variable it take as refference
//if its not used then it move to garbage collector
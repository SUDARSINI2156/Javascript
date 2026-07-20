//here it not go over this number so we go with bigInt

//problem it can store even perfectly but not odd values properly

// console.log(2**53 +1 );//wrong
// console.log(2**53 +2);//correct
// console.log(2**53  +3);//wrong

let limit = 9007199254740992n;

//here addition not work with normal number so add n to 1
console.log(limit+1n);


//n denotes that given in bigint

//console.log(2**53-1);


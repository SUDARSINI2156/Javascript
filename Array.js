/* //Array means list of values

//let veges = [];//new Array();

let veges = ['carrot','beetrrot','ladys finger',true,5,null,undefined,23];
let func = [{name:'goms'},function add(a,b){return(a+b)}]
console.log(typeof(veges));//object
console.log(veges[7]);//undefined
// indexing is similar starts from 0
//it can store any type of datatype
//we can also save function also 
//object
console.log(func[1](1,7));
console.log(func[0]);

//add new
veges[8]='beans';

//push
veges.push('brinjal');///add element at last

console.log(veges);

//remove
veges.pop();//delete lat element

console.log(veges.pop());

 veges.unshift('hello');//add value at first  the array
 console.log(veges);


veges.shift(); //remove value from first
console.log(veges);


 */


let veges = ['hi','hello'];
for(i of veges){//use 'of' keyword to print value else
    // if you use 'in' then return the index value
    
    console.log(veges[i]);
}
    console.log(veges.length);

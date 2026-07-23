//function is also known as method in java


let a = 12;
let b = 24;
let c=90;//global
function operation(x,y=9)//x,y known as parameters
//in y=9 is default value when y has no value 
// else given is used
{
     //let c
     let c=((x+y+y/x)*y);
     return c;//first going to print
}


console.log(operation(2,3));//second


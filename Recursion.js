//recursive function

// -base case
// -update statement
// -recursive case
//let n=5;
function factorial(n){
    if(n==1||n==0){
        return 1;//base case
    }
    return n*factorial(n-1);//updated statement
}
console.log(factorial(5));
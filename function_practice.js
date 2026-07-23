let num = 29;
/* function odd_even(num){
    if(num%2==0){
        return('even');
    }
    //else{
        console.log("Here");
        return("odd");
        console.log("After");//not going to run because its unreachable
    //}
} */

//assignment  function
// let oddoreven = odd_even;

// console.log(oddoreven(3));

//we can also assign a variable for a function
//so using that variable also we acan able to call the function
let oddoreven = function (num){
    if(num%2==0){
        return('even');
    }
    //else{
        console.log("Here");
        return("odd");
        console.log("After");//not going to run because its unreachable
    //}
}
console.log(oddoreven(2));

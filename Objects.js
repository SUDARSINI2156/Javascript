//declaration of object
//real world things represent pandrathu is object
//in js we cn create object without class inside that we could 
//define properties in key-value pair
let car ={
    color:"red",
    name:"Nexon",//property
    driveTrain:'petrol,disel,ev',
    price: 15,

    OnRoadPrice(){
        return this.price+2;
        //this keyword used to take currecnt obj value
    }
//here each property is 
// with key-value pair

};
console.log(car.OnRoadPrice());
/* the value can be extracted using key
the value should be any datatype
we can also keep variable as value
inside an object we can use anyname 
 as key which is also be a identifier */

 /* in key if we give like "hello":"hii",
 then it allow like this but we access like
 console.log(car["hello"]) */

 //to delete object property
 //delete car.color;
 
/* delete car[color]; */


//create property

/*  car['model_year']=2020;
console.log(car); */


//update value


/* car.price =18;
console.log(car); */


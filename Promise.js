
isHalwa=true;
function waitinQueue(){
return new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwa){
                resolve('buy and come');
            }
            else{
                reject("halwa no");
            }

        },1000);

    }
);
}
function buyHalwa(){
    waitinQueue().then((message)=>{
        console.log(message);

    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("go home");

    })
    
}
buyHalwa();

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
async function buyHalwa()//await use only when async present
{
    try{
   let result = await waitinQueue();//await mean wait until it come
   console.log(result);
    
}
catch(error){
    console.log(error);
}
}
buyHalwa();
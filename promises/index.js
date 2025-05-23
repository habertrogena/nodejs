function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve,time))
}

console.log('promise lecture starts');
delayFn(2000).then(()=> console.log('after 2 seconds promise resolved'))
console.log('promise lecture ends');


function divide(num1,num2){
    return new Promise((resolve,reject)=>{
        if (num2 === 0){
            reject('error: cannot divide by zero')
        }
        else{
            resolve(num1/num2)
        }
    })
}

divide(10,0).then((results)=>console.log(results,'res')).catch((error)=> console.log(error,'error'))
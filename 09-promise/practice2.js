function callPromise(name){
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}


function backPromise(){
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            console.log('back');
            resolve("back");
        }, 1000);
    })
}

function hellPromise(){
    return new Promise((resolve,reject)=>{
        resolve("callback hell");
    })
}


// 매개변수가 있고 없고
// resolve에 값이 있고 없고
// 너무 헷갈려
async function exec(){
    let name = await callPromise('kim');
    console.log(name+'반가워');
    let back = await backPromise();
    console.log(back+'을 실행했구나');
    let msg = await hellPromise();
    console.log('여기는 '+msg);

}
exec();
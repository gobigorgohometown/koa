// async function test(params) {
//     return "hello async"
// }

// function getSomethings(params) {
//     return  'Hello async'
// }

// //变成异步  在函数前面加上 async   调用函数后 返回一个promise对象
// const result =  test();
// console.log(result)

function takeLongTime(params) {
    return new Promise(resolve=>{
        setTimeout(()=>resolve('longtime'),1000)
    })
}
async function test(params) {
    const v = await takeLongTime();
    console.log(v);    
}
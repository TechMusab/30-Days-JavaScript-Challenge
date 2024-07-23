function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise fulfilled"), 2000);
  });
}
function p2(){
    return new Promise((resolve, reject)=>{
    setTimeout(
     ()=>reject("promise rejected"),2000
    )
})
}
function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise2 fulfilled"), 4000);
  });
}
/*              Understanding Promises         */
// p1().then((res)=>{
//     console.log(res)
// })
// p2().catch((err)=>{
//     console.log(err)
// })
/*              Chaining Promises      */
// const promise1 = p1();
// promise1
//   .then((res) => {
//     console.log(res);
//     const promsie2 = p3();
//     return promsie2;
//   })
//   .then((res) => {
//     console.log(res);
//   });
/*             Async Await        */
// async function practice(){
//     const prom1=await p1();
//     console.log(prom1);
//     const prom2=await p3();
//     console.log(prom2);
// }
// practice();
// async function practicetrycatch(){
//     try{
//     const prom2=await p2();
//     console.log(prom2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// practicetrycatch();
/*              Fetching Data form API        */
// const promsie1 =fetch("https://dummyjson.com/recipes/1");
// promsie1.then((response)=>{
//     const promise2= response.json();
//     return promise2;
// }).then((data)=>{
//     console.log(data);
// })
// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/recipes/1");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
// fetchData();
/*              Concurrent Promises         */
Promise.all([p1(),p3()]).then((data)=>{
    console.log(data);
});
Promise.race([p1(),p3()]).then((data)=>{
    console.log(data);
});

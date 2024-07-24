/*               Basic Error Handling with try Catch              */
// function tryCatch(){
//     try{
//         throw new Error("This is an error");
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// tryCatch();
// function divide(n1,n2){
//     try{
//     if(n2==0){
//         throw new Error("Cannnot divide by zero Error!!!")
//     }
//     return n1/n2;
// }
// catch(err){
//     console.log(err);
// }

// }
// console.log(divide(1,4));
/*                     Finally Block                          */
// try {
//   console.log("Try block");
//   throw new Error("This is an error");
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Finally block");
// }
/*                Custom Error Objects           */
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//   }
// }

// function riskyFunction() {
//   throw new CustomError("Something went wrong in riskyFunction!");
// }
// try {
//   riskyFunction();
// } catch (err) {
//   console.log(err);
// }
// function vallidate(input) {
//   try {
//     if ((input == "")) {
//       throw new CustomError("Input cannot be empty");
//     }
//     console.log("vallidation successful");
//   } catch (err) {
//     console.log(err);
//   }
// }

// vallidate("");
/*                     Error handling in Promises                  */
// const p1=new Promise((resolve,reject)=>{
//     let random=Math.floor(Math.random()*2);
//     setTimeout(()=>{
//         if(random==1){
//             resolve("Promise1 resolved")
//         }
//         else{
//             reject("Promise1 rejected")
//         }
//     },2000)
// })
// p1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })
// async function checkerror(){
//     try{
//         const msg=await p1;
//         console.log(msg);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// checkerror();
/*              Graceful Error Handling in Fetch                   */
const p2=fetch("https://localhost:3000");
p2.then((response)=>{
console.log(response);
}).catch(()=>{
    console.log("Invalid response");
});
async function FetchData(){
    try{
        const data=await fetch("https://localhost:3000");
    }
    catch(err){
        console.log("Invalid Url" +err);
    }
}
FetchData();
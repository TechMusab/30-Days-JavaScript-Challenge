/*Understandig Closures */
function display(){
    let name = "John";
   return ()=>{
        return name;
    }
}
let displayName = display();
console.log(displayName());
function counter(){
    let count=0;
     return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}
let counter1 = counter();
counter1.increment();
counter1.increment();
counter1.decrement();
/* Practical Closures */
function generateuniqueid(){
  let id=Math.random();
    return function(){
        return id++;
    }

}
let uniqueid = generateuniqueid();
console.log(uniqueid());
console.log(uniqueid());
console.log(uniqueid());
function username(name){
    return ()=>{
        return "Hello "+ name;
    }
}
let user = username("John");
console.log(user());
let arr=[];
/*Closures in Loops */
for(let i=0;i<10;i++){
    //Every iteration has a new scope 
    arr[i]=function(){
        console.log(i);
    }

}
// Calling each function in the array
arr.forEach(fn => fn());
/*Module Pattern */
function items(){
    let items=[];
    return {
        add: function(item){
            items.push(item);
        },
        remove: function(item){
            items=items.filter(i=>i!==item);
        },
        display: function(){
            return items;
        }
    }
}
/*Different scope for each variable*/
let cart = items();
cart.add("apple");
cart.add("orange");
cart.add("banana");
console.log(cart.display());
cart.remove("banana");
console.log(cart.display());
let cart2=items();
cart2.add("mango");
console.log(cart.display());
/*Memoization*/
function memoizeAdd() {
    const cache = new Map();
    return function(a, b) {
        const key = `${a},${b}`; 
        if (cache.has(key)) {
            return cache.get(key); 
        }

        const result = a + b;
        cache.set(key, result);
        return result;
    };
}

const memoizedAdd = memoizeAdd();
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
function memoizefactorial(fn){
    const cache = new Map(); 
    //purpose of this ftn is to give the result if cacahed otherwise call the pssed ftn to calculate it
    return function (num){
        const key=num;
        if(cache.has(key)){
          return cache.get(key);
        }
        const result = fn(num);
        cache.set(key,result);
        return result;
    }
}
function factorial(num){
    for(let i=num-1;i>0;i--){
       num = num*i;
    }
   return num;
}
const factorial1=memoizefactorial(factorial);
console.log(factorial1(5))
console.log(factorial1(5))


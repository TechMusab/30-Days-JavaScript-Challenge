
//named import
import { person,multiply, divide, sum } from "./sum.mjs";
// Import specific functions from lodash
import library from 'lodash';
const { chunk, shuffle } = library;
//object import
import math from "./sum.mjs";
// Axios 
import axios from 'axios';
console.log(sum(1, 2));
console.log(person);
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(math.subtract(1, 2));
console.log(math.PI);
console.log(math.E);
//Lodash Usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chunk(array, 3)); 
console.log(shuffle(array));
//Axios Usage
axios.get("https://dummyjson.com/recipes/1").then((response)=>{
    console.log(response.data);
}).catch((err)=>{
    console.log(err);
});














/*
Syntax:
CommonJS: require and module.exports
ES6: import and export

Loading:
CommonJS: Synchronous
ES6: Asynchronous
Environment:

CommonJS: Node.js
ES6: Browser and Node.js
Optimization:

ES6 modules support tree-shaking and static analysis.
 */
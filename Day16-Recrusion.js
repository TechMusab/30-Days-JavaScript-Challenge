function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
function home(src, dest) {
  console.log(src);
  if (src == dest) {
    console.log("ks");
    return;
  }
  return home(src + 1, dest);
}
home(1, 10);
function sum(arr){
if(arr.length==0){
    return 0;
}
let current=arr[0];
let remain=arr.slice(1);
return current+sum(remain);
}
let array = [1,45,56];
function maxi(arr){
if(arr.length==0){
    return 0;
}
let max=arr[0]>maxi(arr.slice(1))?arr[0]:maxi(arr.slice(1))
return max;
}
let array2 = [67,767,182];
console.log(maxi(array2))
function reversestring(s){
    if(s.length==0){
        return;
    }
    return s.charAt(s.length-1)+ reversestring(s.slice(0, -1));
}
function reversestring(s){
    if(s.length==0){
        return;
    }
    return s.charAt(s.length-1)+ reversestring(s.slice(0, -1));
}
reversestring("musab");
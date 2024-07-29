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
function checkplaindrome(s,i,j){
  if(i>j){
    return true;
  }
  if(s.charAt(i)!==s.charAt(j)){
    return false;
  }
  else{
   return checkplaindrome(s,i+1,j-1);
  }

}
let s="abbccbba";
let isplaindrome=checkplaindrome(s,0,s.length-1);
console.log(isplaindrome);
function checknumber(arr,number,index=0){
  if(arr.length==index){
    return false;
  }
  if(number==arr[index]){
    return arr.indexOf(number);
  }
  else{
    return checknumber(arr,number,index+1);
  }

}
let array3=[1,65,3,6];
console.log(checknumber(array3,3));
function occurences(arr,number,count=0){
  if(arr.length==0){
    return 0;
  }
  if(number==arr[0]){
    count=count+1;
  }
    return count+occurences(arr.slice(1),number);
}
let array4=[1,1,2,1];
console.log(occurences(array4,1));
function binaryserch(arr,s,e,k){
  if(s>e){
    return false;
  }
  let mid =  Math.floor((e + s) / 2);
  if(arr[mid]==k){
    return true;
  }
  if(k>arr[mid]){
   return binaryserch(arr,mid+1,e,k)
  }
  else{
   return binaryserch(arr,s,mid-1,k);
  }
}
let array5=[1,2,4,6,7];
console.log(binaryserch(array5,0,array5.length-1,6));

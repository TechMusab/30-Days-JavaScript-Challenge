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
function saydigits(n){
    if (n == 0) {
        return;
    }
    saydigits()
}
console.log(saydigits(106));
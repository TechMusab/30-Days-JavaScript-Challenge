//Function Declaration
function checkevenodd(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
function square(num) {
  return num * num;
}
//Function Expression
function maximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
function concatemate(s1, s2) {
  return s1 + s2;
}
//Arrow Functions
const sum = (num1, num2) => num1 + num2;
const contain = (st, character) => {
  if (st.includes(character)) {
    return true;
  } else {
    return false;
  }
};
//function parameters and default values
function product(num1, num2 = 7) {
  return num1 * num2;
}
const result = product(8, 5);
console.log(result);
function greeting(name, age = 9) {
  console.log(`Hello ${name} your age is ${age}`);
}
greeting("Musab", 18);
//understanding the default value is overridden by passed value
//Higher Order Function
function higherorder(sum, number) {
  for (let i = 0; i < number; i++) {
    let num = sum(i, number);
    console.log(num);
  }
}
higherorder(sum, 6);
function higherorder2(square, product, value) {
  let res = square(value);
  let result = product(res, 6);
  console.log(result);
}
higherorder2(square, product, 5);
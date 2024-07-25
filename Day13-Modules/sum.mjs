const sum = (n1, n2) => {
  return n1 + n2;
};
const multiply = (n1, n2) => {
  return n1 * n2;
};
const divide = (n1, n2) => {
  return n1 / n2;
};

export {sum,multiply, divide };

let person = {
  name: "musab",
  age: 18,
  showdata() {
    console.log(this.name + " " + this.age);
  },
};
export { person };
// Object Exports
export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14;
export const E = 2.71;
export default  {
  subtract,
  PI,
  E,
};

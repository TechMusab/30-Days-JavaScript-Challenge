//For Loop
//Task1
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//Task2
for (let i = 0; i <= 10; i++) {
  console.log(`5*${i} = ${5 * i}`);
}
//While loop
//Task1
let number = 0;
let i = 0;
while (i <= 10) {
  number += i;
  i++;
}
console.log(number);
//Task2
let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}
//Do While loop
//Task1
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
//Task2
let mynum = 4;
let sum = 4;

do {
  sum = (sum) * (mynum - 1);
  mynum--;
} while (mynum > 1);

console.log(sum);
//Nested For loop for pattren
for(let i=5;i>0;i--){
    for(let j=5;j>=i;j--){
        process.stdout.write("* ");
    }
    console.log("\n");
}
//Loop control
//Task1
for(let i=1;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
//Task2
for(let i=1;i<10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
//Feature 1
function print1to10(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
//Feature 2
function table5(){
    for(let i=1;i<=10;i++){
        console.log(`5*${i} = ${5*i}`);
    }
}
//Feature 3
function pattren(){
    for(let i=5;i>0;i--){
        for(let j=5;j>=i;j--){
            process.stdout.write("* ");
        }
        console.log("\n");
    }
}
//Feature 4
function sum(){
    let number = 0;
    let i = 0;
    while (i <= 10) {
      number += i;
      i++;
    }
    console.log(number);
}
//Feature 5
function factorial(number){
    let sum = number;
    let mynum = number;
    do {
      sum = (sum) * (mynum - 1);
      mynum--;
    } while (mynum > 1);
    console.log(sum);

}
factorial(6);
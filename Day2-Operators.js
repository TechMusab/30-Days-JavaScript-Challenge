let num1=65;
let num2=65;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
num2+=num1;
console.log(num2);
num2-=num1;
console.log(num2);
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
let num3=76;
let num4="76";

console.log(num3==num4);
console.log(num3===num4);
let num5=76;
let num6=65;
if(num5==76 && num6==54){
    console.log("and");
}
else if(num5==76 || num6==54){
    console.log("or");
}
else if (num5!=76){
    console.log("not equal")
}
let number=-5;
number<0?console.log("negative"):console.log("positive");

function operators(num1,num2){
    console.log(num1+num2);
    console.log(num1-num2);
    console.log(num1*num2);
    console.log(num1/num2);
    console.log(num1%num2);
}
operators(5,6);
function comparenumbersandcombine(num1,num2){

    console.log(num1>num2);
    console.log(num1<num2);
    console.log(num1>=num2);
    console.log(num1<=num2);
    console.log(num1==76 && num2==76);
    console.log(num1==76 || num2==54);
    console.log(num1!=52);

}
comparenumbersandcombine(76,54);
function ternaryopertor(num1,num2){
    num1<0?console.log("negative"):console.log("positive");
    num2<0?console.log("negative"):console.log("positive");
}
ternaryopertor(-5,6);
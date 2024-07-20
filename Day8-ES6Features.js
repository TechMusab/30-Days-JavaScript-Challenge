//Template Literals
let name = "Musab";
let age = 18;
let template = `Person name: ${name} and age ${age}`;
console.log(template);

let multiLineString = `Person name: ${name}
Age: ${age}
This is a multi-line string example.`;
console.log(multiLineString);
//Destructuring
let arr=[1,2,3,4,5];
const [n1,n2]=arr;
console.log(n1,n2);

const[,,,,n5]=arr;
console.log(n5);
let obj={
    myname:"Musab",
    myage:18
}
const {myname, myage}=obj;
console.log(myname, myage);
//Spread and Rest Operator
let newarr=[...arr,6,7,8];
console.log(newarr);

function sum(...args){
    return args.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4,5));
//Defuault Parameters
function product(v1,v2=1){
    return v1*v2;
}
console.log(product(5,7));

console.log(product(5));
//Enhanced Object Literals
let greetMethod = "sayHello";
let person = {
    name,
    age,
    [greetMethod]() { // Computed property name for method
        console.log(`Hello, my name is ${this.name}`);
    },
    details() {//shorthand for details:function(){}
        console.log(`I am ${this.age} years old.`);
    }
};

person.sayHello(); 
person.details();  


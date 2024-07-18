//Activity 1: Array Creation and Access
//Task1
let array=[1,2,3,4,5];
console.log(array);
//Task2
console.log(array[0]);
console.log(array[4]);
//Array methods basic
//Task1
array.push(6);
console.log(array);
//Task2
array.pop();
console.log(array);
//Task3
array.unshift(0);
console.log(array);
//Task4
array.shift();
console.log(array);
//Array methods intermediate
//Task1
let array2=array.map((num)=>{
    return num*2;
})
console.log(array2);
//Task2
let array3=array.filter((num)=>{
    return num%2 == 0;
})
console.log(array3);
//Task3
let sum=array.reduce((acc,num)=>{
return acc+=num
},0)
console.log(sum);
//Array Iterations
//Task1
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
//Task2
array.forEach((num)=>{
    console.log(num);
})
//Multi Dimensional array
//Task1
let multidimensionalarray=[
[1,2,3,4],
[5,6,7,8]]
//Task2
console.log(multidimensionalarray[1][1]);
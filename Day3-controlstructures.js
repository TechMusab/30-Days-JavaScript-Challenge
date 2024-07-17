//if/else statements
//Task 1
let num=5;
if(num<0){
    console.log("Number is negative")
}
else if(num>0){
    console.log("Number is positive")
}
else{
    console.log("Number is zero");
}
//Task 2
//take input from user
let age=17;
if(age>=18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}
//Nested if/else
function p(n1, n2, n3) {
    if (n1 > n2) {
      if (n1 > n3) {
        return n1;
      } else if (n3 > n1) {
        return n3;
      }
    } else if (n1 < n2) {
      if(n2>n3){
          return n2;
      }
      else if(n3>n2){
          return n3;
      }
    }
  }
  let n=p(866,2111,5);
  console.log(n);
  //swtich statements
  //Task1
  let number=3;
  switch (number) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid number");
  }
//Task2
let score = 75;
switch (true) {
    case (score >= 90 && score <= 100):
        console.log("A+");
        break;
    case (score >= 80 && score < 90):
        console.log("A");
        break;
    case (score >= 70 && score < 80):
        console.log("B");
        break;
    case (score >= 60 && score < 70):
        console.log("C");
        break;
    case (score >= 50 && score < 60):
        console.log("D");
        break;
    case (score >= 0 && score < 50):
        console.log("F");
        break;
    default:
        console.log("Invalid score");
}
// Ternary operator
//Task1
let number2=6;
number2%2==0?console.log("Number is even"):console.log("Number is odd");
//Combining conditions
//Task1
let year=2016;
if((year%4==0 && year%100!=0) || year%400==0){
    console.log("Leap year");
}
else{
    console.log("Not a leap year");
}
//Feature 1
function p(n1, n2, n3) {
    if (n1 > n2) {
      if (n1 > n3) {
        return n1;
      } else if (n3 > n1) {
        return n3;
      }
    } else if (n1 < n2) {
      if(n2>n3){
          return n2;
      }
      else if(n3>n2){
          return n3;
      }
    }
  }
 //Feature 2
 function eligiblevote(age){
    if(age>=18){
        console.log("You are eligible to vote")
    }
    else{
        console.log("You are not eligible to vote")
    }
 }
    //Feature 3
function checkNumber(num){
    if(num<0){
        console.log("Number is negative")
    }
    else if(num>0){
        console.log("Number is positive")
    }
    else{
        console.log("Number is zero");
    }
}
//Feature 4
function weekday(score){
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("A+");
            break;
        case (score >= 80 && score < 90):
            console.log("A");
            break;
        case (score >= 70 && score < 80):
            console.log("B");
            break;
        case (score >= 60 && score < 70):
            console.log("C");
            break;
        case (score >= 50 && score < 60):
            console.log("D");
            break;
        case (score >= 0 && score < 50):
            console.log("F");
            break;
        default:
            console.log("Invalid score");
    }
}
//Feature 5
function leapyear(year){
    if((year%4==0 && year%100!=0) || year%400==0){
        console.log("Leap year");
    }
    else{
        console.log("Not a leap year");
    }
}
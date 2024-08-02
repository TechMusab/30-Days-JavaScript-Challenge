/*
                      Task 1
 Solve the "Two Sum" problem on LeetCode.
Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
 */

// var twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (j = i; j < nums.length; j++) {
//       if (nums[i] + nums[j + 1] === target) {
//         arr.push(i);
//         arr.push(j + 1);
//         return arr;
//       }
//     }
//   }
//   throw new Error("No number ad up to that number");
// };

/*
                       Task 2
 Solve the "Reverse Integer" problem on LeetCode.
 Write a function that takes an integer and returns it with its digits reversed.
 */
// function helper(x) {
//   let number = x;
//   if (number < 0) {
//     number = Math.abs(number);
//   }
//   if (Math.floor(number / 10) === 0) {
//     return number;
//   }
//   num = number % 10;
//   return String(num) + helper(Math.floor(number / 10));
// }
// var reverse = function (x) {
//     let reversenumber=helper(x);
//   let reversedNum = parseInt(reversenumber);

//   if (reversedNum > Math.pow(2, 31) - 1) {
//     return 0;
//   }

//   return x < 0 ? -reversedNum : reversedNum;
// };
/* 
                            Task 3
Solve the "Palindrome Number" problem on LeetCode.
 Write a function that takes an integer and returns true if it is palindrome, and false otherwise.
 */
// var isPalindrome = function (x) {
//   const INT_MIN = -Math.pow(2, 31);
//   const INT_MAX = Math.pow(2, 31) - 1;
//   if (x > INT_MAX && x < INT_MIN) {
//     return;
//   }
//   let str = String(x);
//   let j = str.length - 1;
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// };
/*
                            Task 4
 Solve the "Merge Two Sorted Lists" problem on LeetCode.
 Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
 */

// function solve(list1,list2){
//     let curr1 = list1;
//       let curr2 = list2;
//       let next1 = curr1.next;
//       let next2 = curr2.next;
//       if(list1.next==null){
//           list1.next=list2;
//           return list1;
//       }
//   while(next1!==null && curr2!==null){
//       if(curr2.val>=curr1.val && curr2.val<=next1.val){
//           //adding values
//           curr1.next=curr2;
//           next2=curr2.next;
//           curr2.next=next1;
//           //updating pointers
//           curr1=curr2;
//           curr2=next2;
//       }
//       else{
//           curr1=next1;
//           next1=next1.next;
//           if(next1==null){
//               curr1.next=curr2;
//               return list1;
//           }
//       }
//   }
//   return list1;
//    }
//   var mergeTwoLists = function(list1, list2) {
//       if(list1==null){
//           return list2;
//       }
//       else if(list2==null){
//           return list1;
//       }
//       if(list1.val<list2.val){
//          return  solve(list1,list2);
//       }
//       else{
//         return  solve(list2,list1);
//       }
//   };
/*
                            Task 5
 Solve the "Valid Parentheses" problem on LeetCode.
 Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
 */
// var isValid = function (s) {
//   let stack = [];
//   for (let c of s) {
//     if (c === "(") {
//       stack.push(")");
//     } else if (c === "{") {
//       stack.push("}");
//     } else if (c === "[") {
//       stack.push("]");
//     } else if (c !== stack.pop()) {
//       return false;
//     }
//     return stack.length === 0;
//   }
// };

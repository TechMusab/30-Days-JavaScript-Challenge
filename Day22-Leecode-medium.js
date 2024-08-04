                                              // Two Sum Problem
// var addTwoNumbers = function (l1, l2) {
//   let curr1 = l1;
//   let curr2 = l2;
//   let carry = 0;
//   let head = new ListNode(-1);
//   let curr = head;
//   while (curr1 !== null || curr2 !== null) {
//     let sum = carry;
//     if (curr1) {
//       sum = curr1.val + sum;
//     }
//     if (curr2) {
//       sum = curr2.val + sum;
//     }
//     let newnode = new ListNode(sum % 10);
//     carry = Math.floor(sum / 10);
//     curr.next = newnode;
//     curr = curr.next;
//     if (curr1 !== null) {
//       curr1 = curr1.next;
//     }
//     if (curr2 !== null) {
//       curr2 = curr2.next;
//     }
//   }
//   if (carry) {
//     let newnode = new ListNode(carry);
//     curr.next = newnode;
//   }
//   return head.next;
// };
                                        //length Of Longest Substring
// var lengthOfLongestSubstring = function (s) {
//   let i = 0;
//   let left = 0;
//   let set = new Set();
//   let max = 0;
//   let j = s.length - 1;
//   while (i <= j) {
//     if (!set.has(s.charAt(i))) {
//       set.add(s.charAt(i));
//       max=Math.max(max,set.size)
//       i++;
//     } else {
//       console.log("Haha");
//       set.delete(s.charAt(left));
//       left++;
//     }
//   }
//   return max;
// };
// console.log(lengthOfLongestSubstring("abcabcbb"));
                                            //Container with most Water Problem
// var maxArea = function (height) {
//   let left = 0;
//   let right = height.length - 1;
//   let max = 0;
//   while (left !== right) {
//     if (height[left] < height[right]) {
//       if (height[left] * (right - left) > max) {
//         max = height[left] * (right - left);
//       }
//       left++;
//     } else {
//       if (height[right] * (right - left) > max) {
//         max = height[right] * (right - left);
//       }
//       right--;
//     }
//   }
//   return max;
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
                                              //Three Sum Problem
// var threeSum = function (nums) {
//     if(nums.length ===0){
//         return nums;
//     }
// let arr=nums.sort((a, b) => a - b);;
// const uniqueSet = new Set();
// for(let i=0;i<arr.length-2;i++){
// let j=i+1;
// let k=arr.length-1;
// while(j<k){
//     let sum=arr[j]+arr[k];
//     if(sum==-arr[i]){
//         const triplet = [nums[i], nums[j], nums[k]].join(',');
//         uniqueSet.add(triplet);
//         j++;
//         k--;
//     }
//     else if(sum>-arr[i]){
//         k--;
//     }
//     else if(sum<-arr[i]){
//         j++;
//     }
// }
// }
// return Array.from(uniqueSet).map(triplet => triplet.split(',').map(Number));
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
                                              // Group Anagroms
// var groupAnagrams = function (strs) {
//   const map ={};
//   for(var i = 0; i < strs.length;i++){
//     const key=strs[i].split("").sort().join("");
//     if(map[key]){
//         map[key].push(strs[i]);
//     }
//     else{
//         map[key]= [strs[i]];
//         //map['aet']= ['eat']
//     }
//   }
//   return Object.values(map);

// };
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let n = nums1.length + nums2.length;
  let index1 = Math.floor(n / 2 - 1);
  let index2 = Math.floor(n / 2);
  let count = 0;
  let element1 = -1;
  let element2 = -1;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      if (count === index1) {
        element1 = nums1[i];
      }
      if (count == index2) {
        element2 = nums1[i];
      }
      i++;
    } else {
      if (count === index1) {
        element1 = nums2[j];
      }
      if (count == index2) {
        element2 = nums2[j];
      }

      j++;
    }
    count++;
  }
  while (i < nums1.length) {
    if (count === index1) {
      element1 = nums1[i];
    }
    if (count === index2) {
      element2 = nums1[i];
    }
    count++;
    i++;
  }
  while (j < nums2.length) {
    if (count === index1) {
      element1 = nums2[j];
    }
    if (count === index2) {
      element2 = nums2[j];
    }
    count++;
    j++;
  }
  if (n % 2 == 1) {
    return element2;
  } else {
    return (element1 + element2) / 2;
  }
};

console.log(findMedianSortedArrays([], [2, 3]));
function mergelists(list1, list2) {
  let dummynode = new ListNode(-1);
  let head = dummynode;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummynode.next = list1;
      list1 = list1.next;
    } else {
      dummynode.next = list2;
      list2 = list2.next;
    }
    dummynode = dummynode.next;
  }
  if (list1 === null) {
    dummynode.next = list2;
  } else {
    dummynode.next = list1;
  }
  return head.next;
}
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    let list1 = lists.shift();
    let list2 = lists.shift();
    let merged = mergelists(list1, list2);
    lists.push(merged);
  }
  return lists[0];
};
var trap = function (height) {
  let total = 0;
  for (let i = 0; i < height.length - 1; i++) {
    let leftmax = 0;
    let rightmax = 0;
    for (let j = i + 1; j < height.length; j++) {
      if (height[j] > height[i]) {
        rightmax = height[j];
      }
    }
    for (let k = i; k >= 0; k--) {
      if (height[k] > height[i]) {
        leftmax = height[k];
      }
    }
    console.log(leftmax, rightmax);
    if (height[i] < leftmax && height[i] < rightmax) {
      total += Math.min(leftmax, rightmax) - height[i];
    }
  }
  return total;
};
console.log(trap([4, 2, 0, 3, 2, 5]));
var solveNQueens = function (n) {
  if (n === 1) {
    return [["Q"]];
  }
  
  let col = new Set();
  let postdiag = new Set();
  let prevdiag = new Set();
  const board = Array.from(Array(n), () => new Array(n).fill("."));
  let result = [];

  const isValid = (r, c) =>
    !(col.has(c) || postdiag.has(r + c) || prevdiag.has(r - c));

  const Add = (r, c) => {
    col.add(c);
    postdiag.add(r + c);
    prevdiag.add(r - c);
    board[r][c] = "Q";
  };

  const Remove = (r, c) => {
    col.delete(c);
    postdiag.delete(r + c);
    prevdiag.delete(r - c);
    board[r][c] = ".";
  };

  function Main(row) {
    if (row == n) {
      result.push(board.map((row) => row.join("")));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (isValid(row, j)) {
        Add(row, j);
        Main(row + 1);
        Remove(row, j);
      }
    }
  }

  Main(0);
  return result;
};
var ladderLength = function(beginWord, endWord, wordList) {
  let set= new Set(wordList);
  let queue=[[beginWord,1]];
  while(queue.length){
      let [current,count]=queue.shift();
      if(current==endWord){
          return count;
      }
      for(let i=0;i<26;i++){
          for(j=0;j<current.length;j++){
              let letter=String.fromCharCode(97+i);
              let word=current.slice(0,j)+letter+current.slice(j+1)
              if(set.has(word)){
                  queue.push([word,count+1])
                  set.delete(word);
              }
          }
      }
  }
  return 0;
};
function bubblesort(array) {
  let swapped = [];
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp;
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
}
let arr = [6, 2, 5, 2, 4];
bubblesort(arr);
function selectionsort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    for (j = i; j < array.length - 1; j++) {
      if (smallest > array[j + 1]) {
        smallest = array[j + 1];
      }
      let temp;
      temp = array[i];
      array[i] = smallest;
      smallest = temp;
    }
  }
  console.log(array);
}
selectionsort(arr);

function partiton(array, s, e) {
  let pivot = array[s];
  let count = 0;
  for (let i = s + 1; i <= e; i++) {
    if (array[i] < pivot) {
      count++;
    }
  }
  //place pivot at right positon
  let pivotindex = s + count;
  //swapping
  let temp = array[pivotindex];
  array[pivotindex] = array[s];
  array[s] = temp;
  let i = s;
  let j = e;
  while (i < pivotindex && j > pivotindex) {
    while (array[i] <= pivot) {
      i++;
    }
    while (array[j] >= pivot) {
      j--;
    }

    let temp2 = array[i];
    array[i] = array[j];
    array[j] = temp2;
    i++;
    j--;
  }

  return pivotindex;
}

function quickSort(arr, s, e) {
  if (s >= e) {
    return;
  }
  let pivot = partiton(arr, s, e);
  quickSort(arr, s, pivot - 1);
  quickSort(arr, pivot + 1, e);
}
let array = [5, 6, 2, 1, 3];
quickSort(array, 0, array.length - 1);
console.log(array);
function linearsearch(arr, element) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == element) {
      return i;
    }
  }
  return "Element not found";
}
let array4 = [6, 2, 2, 4];
console.log(linearsearch(array4, 4));
function binary(arr, element, s, e) {
  while (s <= e) {
    let mid = Math.floor((e + s) / 2);
    if (element == arr[mid]) {
      return mid;
    } else if (element < arr[mid]) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return -1;
}
let array5 = [6, 2, 2, 4, 8];
let res = binary(array5, 4, 0, array5.length - 1);
if (res) {
  console.log("ELement found at index:" + res);
} else {
  console.log("ELement not found");
}
function occrunces(s, c) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (c == s.charAt(i)) {
      count++;
    }
  }
  return count;
}
let count = occrunces("Musabb", "b");
console.log(count);
function longestsubstring(s) {
  let start = 0;
  let ends = 0;
  let max = 0;
  let set = new Set();
  while (ends < s.length) {
    if (!set.has(s.charAt(ends))) {
      set.add(s.charAt(ends));
      max = Math.max(max, set.size);
      ends++;
    } else {
      set.delete(s.charAt(start));
      start++;
    }
  }
  return max;
}
console.log(longestsubstring("GeeksforGeeks"));
function rotatearray(array, k) {
  k = k % array.length;
  let newarray = [];
  for (let i = 0; i < k; i++) {
    newarray.push(array.shift());
  }
 array.push(newarray);
  newarray= array.flat();
   console.log(newarray);
}
let array6 = [2, 4, 2, 3, 4, 4];
rotatearray(array6, 10);
function mergearrays(array,array2) {
  let mergedArray = array.concat(array2);
  mergedArray.sort((a, b) => a - b);
  return mergedArray;

}
let array7 = [1,2,3,4,5,6,9,10];
let array8 = [7,8];
let newarray=mergearrays(array7,array8);
console.log(newarray);

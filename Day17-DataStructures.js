class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   addnode(data) {
//     const node = new Node(data);
//     if (this.head == null) {
//       this.head = node;
//       return;
//     }

//     node.next = this.head;
//     this.head = node;
//     this.size++;
//   }
//   addatlast(data) {
//     const node = new Node(data);
//     if (this.head == null) {
//       this.head = node;
//       this.size++;
//       return;
//     }
//     let current = this.head;
//     while (current.next != null) {
//       current = current.next;
//     }
//     current.next = node;
//     this.size++;
//   }
//   removefromlast() {
//     if (this.head == null) {
//       return;
//     }
//     let current = this.head;
//     while (current.next.next != null) {
//       current = current.next;
//     }
//     current.next = null;
//     this.size--;
//   }
//   displaylist() {
//     let current = this.head;
//     while (current != null) {
//       console.log(current.data, " ");
//       current = current.next;
//     }
//   }
//   displaysize() {
//     console.log("Size: " + this.size);
//   }
// }
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    let node = new Node(data);
    if (!this.top) {
      this.top = node;
      return;
    }
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (this.top == null) {
      return;
    }
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }
  peek() {
    if (this.top == null) {
      console.log("No element found ");
      return;
    }
    return this.top.data;
  }
  isEmpty() {
    if (this.top == null) {
      return true;
    }
    return false;
  }
}

// function reverse(s) {
//   let stack = new Stack();
//   for (let char of s) {
//     stack.push(char);
//   }
//   let reversed = "";
//   while (!stack.isEmpty()) {
//     reversed += stack.pop();
//   }
//   return reversed;
// }

// console.log(reverse("Musab"));

// let L = new LinkedList();
// L.addatlast(5);
// L.addatlast(5);
// L.addatlast(5);
// L.addatlast(5);
// L.addnode(3);
// L.removefromlast();
// L.removefromlast();
// L.removefromlast();
// L.displaylist();
// L.displaysize();
// let s = new Stack();
// s.push(5);
// s.pop();
// s.peek();
// s.push(6);
// s.push(7);
// s.push(8);
// console.log(s.peek());
// console.log(s.isEmpty());
class queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(data) {
    const node = new Node(data);
    if (!this.front) {
      this.front = node;
      this.back = node;
    }
    this.back.next = node;
    this.back = node;
  }
  dequeue() {
    if (!this.front) {
      return "Cannot Dequeue";
    }
    const data = this.front.data;
    this.front = this.front.next;
    if (this.front == null) {
      this.back = null;
    }
    return data;
  }
  isEmpty() {
    if (this.front == null) {
      return true;
    }
    return false;
  }
  peek() {
    if (this.front == null) {
      return "Cannot Peek";
    }
    return this.front.data;
  }
}
// let q = new queue();
// q.enqueue(5);
// q.enqueue(8);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.isEmpty());
// function printer(jobs){
//   let q=new queue();
//   jobs.forEach(job=>q.enqueue(job));
// while(!q.isEmpty()){
//   console.log("Processed Job: "+q.dequeue());
// }
// }
// const jobs = ["Job1", "Job2", "Job3", "Job4"];
// printer(jobs);



class Treenode{
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}
class BinaryTree{
  constructor(){
    this.root=null;
  }
  insertnode(data){
    const node=new Treenode(data);

    if(this.root==null){
      this.root=node;
      return;
    }
    let current=this.root;
    while(true){

    if(node.data<current.data){
      if(current.left==null){
       current.left=node;
       break;
      }
      else{
        current=current.left;
      }
    }
    else{
      if(current.right==null){
        current.right=node;
        break;
      }
      else{
        current=current.right;
      }
    }
  }
}



inordertraversel(root){
  if(root==null){
    return;
  }
  this.inordertraversel(root.left)
  console.log(root.data," ");
  this.inordertraversel(root.right)
}
}
let b=new BinaryTree();
b.insertnode(6);
b.insertnode(4);
b.insertnode(9);
b.insertnode(1);
b.inordertraversel(b.root);
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addnode(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
    this.size++;
  }
  addatlast(data){
    const node = new Node(data);
    if (this.head == null) {
        this.head = node;
        this.size++;
        return;
      }
     let current=this.head;
     while(current.next != null){
        current = current.next
     }
     current.next=node;
     this.size++;
  }
  removefromlast(){
    if(this.head==null){
        return;
    }
    let current=this.head;
    while(current.next.next != null){
        current = current.next
    }
    current.next=null;
    this.size--;
  }
  displaylist(){
    let current=this.head;
    while(current != null){
        console.log(current.data, " ")
        current = current.next;
    }
  }
  displaysize(){
    console.log("Size: " + this.size);
  }

}
let L= new LinkedList();
L.addatlast(5);
L.addatlast(5);
L.addatlast(5);
L.addatlast(5);
L.addnode(3);
L.removefromlast();
L.removefromlast();
L.removefromlast();
L.displaylist();
L.displaysize();
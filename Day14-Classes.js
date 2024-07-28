                    /*class defination*/
// class Person {
//   constructor(_firstname,_lastname, age) {
//     this._firstname = _firstname;
//     this._lastname=_lastname;
//     this.age = age;
//   }
//   greeting() {
//     console.log(this._firstname, this.age);
//   }
//   updateage() {
//     this.age++;
//     console.log(this.age);
//   }
//   static greeting() {
//     console.log("Hello");
//   }
//   get firstName() {
//     return this._firstname;
//   }

//   set firstName(value) {
//     this._firstname = value;
//   }
//   get lastName() {
//     return this._lastname;
//   }
//   set lastName(value) {
//     this._lastname = value;
//   }
// }
// let p = new Person("musab","ubaid", 18);
// p.greeting();
// p.updateage();
                  /*Class Inhertince*/
// class Student extends Person {
//   static count = 0;
//   constructor(id, firstname,lastname ,age) {
//     super(firstname,lastname, age);
//     this.id = id;
//     Student.count++;
//   }
//   display() {
//     console.log(this.id);
//   }
//   greeting() {
//     console.log(this.id, this._firstname, this._lastname,this.age);
//   }
//   static showcount() {
//     return Student.count;
//   }
// }
// let s = new Student(1, "musab","ubaid", 18);
// s.display();
// s.greeting();
             /*Static Methods and properties*/
// Person.greeting();
// console.log(Student.count);
// Student.showcount();
            /*setters and getters*/
// set and get method name should be same
// let p2=new Person("John","Doe",20);
// console.log(p2.firstName);
// console.log(p2.lastName);
// p2.firstName="musab"
// p2.lastName="ubaid"
// console.log(p2.firstName);
// console.log(p2.lastName);
              /*Private Fields*/
// class Account{
//     #balance=0;


// set balance(balance) {
//     if (balance > 0) {
//       this.#balance = balance;
//     }
//   }
//   get balance(){
//         return this.#balance;
//   }
// deposit(value){
//     this.#balance+=value;
// }
// display(){
//     console.log(this.#balance);
// }
// withdraw(value){
//     if(this.#balance>=value){
//         this.#balance-=value;
//         return this.#balance;
//     }
//     else{
//         console.log("Insufficient Balance");
//     }
// }
// }
// let a=new Account;
// a.balance=1000;
// console.log(a.balance);
// a.deposit(1000);
// a.display();
// a.withdraw(500)
// a.display()
// a.withdraw(2000);
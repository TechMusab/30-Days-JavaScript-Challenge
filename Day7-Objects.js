// Object Creation & Access
let book={
    title:"Book",
    author:"Author",
    year:2012,
    mymethod:function(){
        console.log(book.title,book.author);
    }
}
let book1={
    title:"Book1",
    author:"Author1",
    year:2015,
}
let book2={
    title:"Book2",
    author:"Author2",
    year:2017,
}
console.log(book);
console.log(book.title);
console.log(book.author);
//Object Methods
book.mymethod();
book.year=function(year){
    this.year=year;
}
book.year(2011);
console.log(book.year);
//Nested Objects
let library={
    name:"Library",
    books:[book,book1,book2]
}
console.log(library);
console.log(library.name);
for(let i=0;i<library.books.length;i++){
    console.log(library.books[i].title);
}
//this keyword
book.myftn=function(){
    return `${this.title} - ${this.author}`;
}
console.log(book.myftn());
//Object Iteration
for(let property in book){
    console.log(property,book[property]);
}
let keys=Object.keys(book)
let values=Object.values(book)
console.log(keys);
console.log(values);
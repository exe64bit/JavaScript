function CreateBook(bookName, bookAuther, bookPages){  
    this.bookName = bookName
    this.bookAuther = bookAuther
    this.bookPages = bookPages
}

let book1 = new CreateBook("Physics", "HC Verma", 340)

console.log(book1);




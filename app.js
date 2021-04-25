let myLibrary = [];
let addNewBookButton = document.getElementById("book-button");
addNewBookButton.addEventListener("click", function() {
    document.getElementById("form-container").style.display = "block";
});

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    addBookToLibrary(title, author, pages, read);
})

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.getInfo = function () {
            let readStatus = "not read yet";
            if (this.read == true) {
                readStatus = "read";
            }
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`);
        };
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    let book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
}

function updateDisplay() {
    
}
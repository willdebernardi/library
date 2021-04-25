let myLibrary = [];
let addNewBookButton = document.getElementById("book-button");
addNewBookButton.addEventListener("click", function() {
    document.getElementById("form-container").style.display = "block";
});

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
    let title = (document.getElementById("title")).value;
    let author = (document.getElementById("author")).value;
    let pages = (document.getElementById("pages")).value;
    let readStatus = (document.getElementById("read")).checked;
    addBookToLibrary(title, author, pages, readStatus);
    document.getElementById("form-container").style.display = "none";
    (document.getElementById("new-book")).reset();
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
    updateDisplay();
}

function updateDisplay() {
    let book = myLibrary[myLibrary.length - 1];
    let bookGrid = document.getElementById("book-grid");
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let titleH = document.createElement("h2");
    titleH.classList.add("card-text", "title");
    let authorH = document.createElement("h2");
    authorH.classList.add("card-text", "author");
    let pagesH = document.createElement("h2");
    pagesH.classList.add("card-text", "pages");
    let buttonRow = document.createElement("div");
    buttonRow.classList.add("button-row");
    let readButton = document.createElement("button");
    readButton.classList.add("card-button", "read-button");
    let removeButton = document.createElement("button");
    removeButton.classList.add("card-button", "remove");

    titleH.textContent = "\""+ book.title + "\"";
    authorH.textContent = book.author;
    pagesH.textContent = "Pages: " + book.pages;
    readButton.textContent = "Read";
    removeButton.textContent = "Remove";

    if (book.read === true) {
        readButton.textContent = "Read";
    } else {
        readButton.textContent = "Not Read";
    }

    readButton.addEventListener("click", function() {
        this.classList.toggle("read-button-active");
        if(this.textContent === "Read") {
            this.textContent = "Not Read";
        } else {
            this.textContent = "Read";
        }
    })

    removeButton.addEventListener("click", function() {
        cardDiv.remove();
        myLibrary.pop();
    })

    buttonRow.appendChild(readButton);
    buttonRow.appendChild(removeButton);
    cardDiv.appendChild(titleH);
    cardDiv.appendChild(authorH);
    cardDiv.appendChild(pagesH);
    cardDiv.appendChild(buttonRow);
    bookGrid.appendChild(cardDiv);
}
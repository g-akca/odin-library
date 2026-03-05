const myLibrary = [];
const booksSection = document.getElementById("books-section");
const dialog = document.getElementById("add-modal");
const openBtn = document.getElementById("open-dialog");
const closeBtn = document.getElementById("close-dialog");
const form = document.querySelector("form");

function Book(title, author, pages, description, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, description, read) {
    const newBook = new Book(title, author, pages, description, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    booksSection.innerHTML = "";
    myLibrary.forEach(book => {
        const newElement = document.createElement("div");
        newElement.classList.add("book-card");
        newElement.innerHTML = `
            <div class="book-header">
                <div>
                    <p class="book-title">${book.title}</p>
                    <p class="book-author">${book.author}</p>
                </div>
                <p class="book-pages">${book.pages} pages</p>
            </div>
            <div class="book-main">
                <p>${book.description}</p>
            </div>
            <div class="book-footer">
                <button type="button" class="${book.read ? "read" : "not-read"}">${!book.read ? "NOT " : ""}READ</button>
                <button type="button" class="delete">DELETE</button>
            </div>
        `;

        booksSection.appendChild(newElement);
    });
}

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = form.elements["title"].value;
    const author = form.elements["author"].value;
    const pages = form.elements["pages"].value;
    const description = form.elements["description"].value;
    const read = form.elements["read"].value;

    addBookToLibrary(title, author, pages, description, read);
    dialog.close();
    displayBooks();
});

displayBooks();
const myLibrary = [
    {
        title: "Title",
        author: "Author Person",
        pages: "150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Ut enim exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        read: false
    }
];
const booksSection = document.getElementById("books-section");

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
                <button type="button" class="not-read">NOT READ</button>
                <button type="button" class="delete">DELETE</button>
            </div>
        `;

        booksSection.appendChild(newElement);
    });
}

displayBooks();
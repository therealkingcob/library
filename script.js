const myLibrary = [];

function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
  }

  function addBookToLibrary(book) {
    myLibrary.push(book);
  }

  function displayBooks() {
    for(let book of myLibrary) {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(book.info());
        newDiv.appendChild(newContent);
        const element = document.getElementById("page");
        element.appendChild(newDiv);
    }
  }


const harryPotter = new book("Harry Potter", "J. K. Rowling", 748, true);
addBookToLibrary(harryPotter);
displayBooks();


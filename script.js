const myLibrary = [];
const button = document.getElementById("addNewBook");
const dialog = document.getElementById("dialog");
const output = document.getElementById("output");


button.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener('submit', function(event) {

  event.preventDefault();

  const newBook = new book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("read").value);
  addBookToLibrary(newBook);
  displayBook(newBook);
  dialog.close();
}); 




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

  function displayBook(book) {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(book.info());
        newDiv.appendChild(newContent);
        const element = document.getElementById("page");
        element.appendChild(newDiv);
  }





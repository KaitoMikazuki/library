const myLibrary = [];

function main(){
    // For demo purposes
    const example1 = new Book("Harry Potter and the Sorcerer's Stone",'J.K. Rowling','223',false, crypto.randomUUID);
    const example2 = new Book("Atomic Habits", 'James Clear', '320', true, crypto.randomUUID);
    myLibrary.push(example1, example2);

    // Add book buttons
    bookFormWindow = document.getElementById("bookFormWindow");
    document.getElementById("addBook").addEventListener('click', () => bookFormWindow.showModal())
    document.getElementById("close").addEventListener('click', () => bookFormWindow.close())
    document.getElementById("bookForm").addEventListener('submit', addBookToLibrary)
}

function Book(title, author, pages, read, id){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author || "Unkown";
    this.pages = pages;
    this.read = read;
    this.id = id;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, pages, ${this.read}`
    }
}

function addBookToLibrary(event){
    event.preventDefault();
    const bookData = new FormData(event.target);

    // Creates New book object with complete parameters
    const book = new Book(bookData.get('title'), bookData.get('author'), bookData.get('pages'), (bookData.get('status') !== null), crypto.randomUUID())
    console.log(book.info());
    myLibrary.push(book);

    // Resets the form and adds interactivity
    event.target.reset();
    alert(`Added "${book.title}" to the database!`);
}

function displayOnPage(){
    // display on page
}

main();
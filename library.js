const myLibrary = [];

function main(){
    // Examples
    const harry_potter = new Book("Harry Potter and the Sorcerer's Stone",'J.K. Rowling','223',false, crypto.randomUUID);
    const atomic_habits = new Book("Atomic Habits", 'James Clear', '320', true, crypto.randomUUID);
    myLibrary.push(harry_potter, atomic_habits);

    bookFormWindow = document.getElementById("bookFormWindow");
    document.getElementById("addBook").addEventListener('click', () => openBookForm(bookFormWindow))
}

function Book(title, author, pages, read,id){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, pages, ${this.read}`
    }
}

function openBookForm(bookFormWindow){
    bookFormWindow.showModal();
}

function addBookToLibrary(){
    let id = crypto.randomUUID();
}

function displayOnPage(){
    // display on page
}


function convertToLibraryItem(title){

}

main();
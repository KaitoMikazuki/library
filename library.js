const myLibrary = [];

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
        return `${this.title} by ${this.author}, ${this.pages}, pages, ${this.read} `
    }
}

function addBookToLibrary(){
    let id = crypto.randomUUID();

}

function displayOnPage(){
    // display on page
}
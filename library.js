const myLibrary = [];

function main(){
    // For demo purposes
    const example1 = new Book("Harry Potter and the Sorcerer's Stone",'J.K. Rowling','223',false, crypto.randomUUID);
    const example2 = new Book("Atomic Habits", 'James Clear', '320', true, crypto.randomUUID);
    myLibrary.push(example1, example2);
    displayOnPage();

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
    this.pages = pages || "n/a";
    this.read = read;
    this.id = id;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addBookToLibrary(event){
    event.preventDefault();
    const bookData = new FormData(event.target);

    // Validates the information being submitted by the user
    if (!/^[A-Za-z0-9 ]{1,100}$/.test(bookData.get('title'))){
        alert("Invalid title");
        return
    }

    else if (!/^[A-Za-z ]{0,100}$/.test(bookData.get('author'))){
        alert("Invalid author");
        return
    }

    else if (!/^[0-9 ]{0,5}$/.test(bookData.get('pages'))){
        alert("Invalid page number");
        return
    }

    // Creates New book object with complete parameters
    const book = new Book(bookData.get('title'), bookData.get('author'), bookData.get('pages'), (bookData.get('status') !== null), crypto.randomUUID())
    console.log(book.info());
    myLibrary.push(book);

    // Resets the form and adds interactivity
    event.target.reset();
    alert(`Added "${book.title}" to the database!`);
    displayOnPage();
}

function displayOnPage(){
    const bookList = document.querySelector(".bookList");
    bookList.innerHTML = ""
    myLibrary.forEach((book) => {
        const status = book.read ? "Read" : "Not read";
        bookList.insertAdjacentHTML('beforeend', `
            <tr class="book" id="${book.id}">
                <td class="title">${book.title}</td>
                <td class="author">${book.author}</td>
                <td class="pages">${book.pages}</td>
                <td><button class="status">${status}</button></td>
                <td><button class="remove">x</button></td>
            </tr>
        `)
    })
}
main();
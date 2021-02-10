// Variables
let myLibrary = [];
const bookVal = document.querySelector('.book-input');
const authVal = document.querySelector('.auth-input');
const readStatus = document.querySelector('select');
const button = document.querySelector('.button');
const results = document.querySelector('.dom-results');
const newBook = new Book(bookVal.value, authVal.value, readStatus.value); 


// Book constructor
function Book(title, author, status) {
	this.title = title;
	this.author = author;
	this.status = status;
}

Book.prototype.info = function() {
	return `${this.title}, ${this.author}, ${this.status}`;
}

// Add book objects to library
function addBookToLibrary() {
	if(!myLibrary) {
		return;
	}
	myLibrary.push(newBook);
	console.log(myLibrary);
	return myLibrary;
}

addBookToLibrary(); 

/*
// Append books to webpage
myLibrary.forEach(displayBooks);
function displayBooks() {
	let showText = document.createElement('div');
		showText.textContent += newBook.info();
		results.appendChild(showText);
}

displayBooks();


	if(bookVal.value === '') {
		myLibrary.push(newBook);
	}
*/
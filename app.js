// Book constructor
function Book(title, author, status) {
	this.title = title;
	this.author = author;
	this.status = status;
}

// Variables
let myLibrary = [];
const bookVal = document.querySelector('.style-input');
const authVal = document.querySelector('.style-author');
const readStatus = document.querySelector('select');
const button = document.querySelector('.button');
const results = document.querySelector('.dom-results');

// Add book objects to library
function addBookToLibrary() {
	button.addEventListener('click', () => {
		const newBook = new Book(bookVal.value, authVal.value, readStatus.value); 
		return myLibrary.push(newBook);
	});
}

addBookToLibrary();

/* Append books to webpage
function displayBooks() {
	for (i = 0; i <= myLibrary.length; i++) {
		results = myLibrary.innerHTML;
	}
}

displayBooks();
*/
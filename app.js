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

// Book prototype
Book.prototype.info = function() {
	return `${this.title}, ${this.author}, ${this.status}`;
}

// Add book objects to library
function addBookToLibrary() {
	if(myLibrary.length > 0) {
	}
	let book = new Book(bookVal.value, authVal.value, readStatus.value); 
	myLibrary.push(book);
	console.log(myLibrary);
	return myLibrary;
}

addBookToLibrary(); 


// Append books to webpage
function displayBooks() {
	button.addEventListener('click', () => {
	let showText = document.createElement('div');
	let bookList = `${bookVal.value} ${authVal.value} ${readStatus.value}`;
	showText.textContent = bookList;
	results.appendChild(showText);
	let removeButton = document.createElement('button');
	removeButton.textContent = 'remove';
	removeButton.style.color = 'white';
	removeButton.addEventListener('click', () => {
		results.removeChild(showText);
	});
	results.appendChild(removeButton);
	});
}

displayBooks();
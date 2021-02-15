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
	return `${bookVal.value} ${authVal.value} ${readStatus.value}`;
}

// Add book objects to library
function addBookToLibrary() {
	if(myLibrary.length > 0) {
	}
	let book = newBook.info(); 
	myLibrary.push(book);
	return myLibrary;
}

addBookToLibrary(); 


// Append books to webpage
function displayBooks() {
	button.addEventListener('click', () => {
	let showText = document.createElement('div');
	let bookList = newBook.info();
	showText.textContent = bookList;
	results.appendChild(showText);
		function removeEntry() {
			let removeButton = document.createElement('button');
			removeButton.textContent = 'remove';
			removeButton.style.color = 'white';
			removeButton.addEventListener('click', () => {
			results.removeChild(showText);
			removeButton.remove();
			});
			results.appendChild(removeButton);
		}
		removeEntry();
	});
}

displayBooks();
"use strict";

// Variables
let myLibrary = [];
const bookVal = document.querySelector('.book-input');
const authVal = document.querySelector('.auth-input');
const readStatus = document.querySelector('select');
const button = document.querySelector('.button');
const results = document.querySelector('.dom-results');

// Book constructor
function Book(title, author, status) {
	this.title = title;
	this.author = author;
	this.status = status;
}

const newBook = new Book(bookVal.value, authVal.value, readStatus.value);

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
	let bookList = document.createElement('div');
	let authList = document.createElement('div');
	let readList = document.createElement('button');
	bookList.className = 'bookList';
	authList.className = 'authList';
	readList.className = 'readList';
	bookList.textContent = bookVal.value;
	authList.textContent = authVal.value;
	readList.textContent = readStatus.value;
	readList.addEventListener('click', function(event) {
		const btnEl = event.target;
		if(btnEl.innerText == 'read') {
			return btnEl.innerText = 'not read';
		} else if(btnEl.innerText == 'not read') {
			return btnEl.innerText = 'read';
		}
	});
	showText.appendChild(bookList);
	showText.appendChild(authList);
	showText.appendChild(readList);
	results.appendChild(showText);

	// Remove button for DOM Entries
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
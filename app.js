// Book constructor
function Book(title, author, status) {
	this.title = title;
	this.author = author;
	this.status = status;
	this.info = function () {
		return `${title}, ${author}, ${status}`;
	};
}

// Variables
const bookVal = document.querySelector('.style-input');
const authVal = document.querySelector('.style-author');
const readStatus = document.querySelector('.status');
const button = document.querySelector('.button');
let myLibrary = [];

// add books to library array
function addBookToLibrary() {
	let userInput =	button.addEventListener('click', () => {
		console.log(`${bookVal.value} ${authVal.value}`);
	});
} 

addBookToLibrary();
// Book constructor
function Book(title, author, status) {
	this.title = title;
	this.author = author;
	this.status = status;
	this.info = function () {
		return `${title}, ${author}, ${status}`;
	};
}

let myLibrary = [];

// 
function addBookToLibrary() {
  const bookVal = document.querySelector('.style-input');
  const authVal = document.querySelector('.style-author');
  const readStatus = document.querySelector('.status');
} 

console.log(addBookToLibrary());
/*
const results = document.querySelector('.dom-results');
const div = document.createElement('div');
*/
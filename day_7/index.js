/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

const date = new Date();
console.log(date);

class Booklist {
  constructor(
    numOfReadBooks,
    numOfUnReadBooks,
    readBooks,
    unReadBooks,
    nextBook,
    currentBook,
    lastBook,
    allBooks
  ) {
    this.numOfReadBooks = 0;
    this.numOfUnReadBooks = 0;
    this.readBooks = [];
    this.unReadBooks = [];
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.allBooks = [];
  }

  add(book) {
    this.allBooks.push(book);
    if (book.read) {
      this.numOfReadBooks += 1;
      this.readBooks.push(book);
      this.lastBook = this.readBooks[this.readBooks.length - 1];
    }
    if (!book.read) {
      this.numOfUnReadBooks += 1;
      this.unReadBooks.push(book);
      this.nextBook = this.unReadBooks[0];
    }
    if (!book.read && book.readDate === date) {
      this.currentBook = book;
    }
  }

  finishCurrentBook() {
    if (!this.currentBook.read) {
      this.currentBook.read = true;
      this.lastBook = this.currentBook;
      this.currentBook = this.nextBook;
      this.currentBook.readDate = new Date(Date.now());
    }
  }

  getNextBook() {
    console.log(this.nextBook);
  }

  getLastBook() {
    console.log(this.lastBook);
  }

  getCurrentBook() {
    console.log(this.currentBook);
  }

  getNumOfReadBooks() {
    console.log(this.numOfReadBooks);
  }

  getNumOfUnReadBooks() {
    console.log(this.numOfUnReadBooks);
  }

  getAllBooks() {
    console.log(this.allBooks);
  }
}

class Book {
  constructor(title, genre, author, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
  }
}

const newBook = new Book('Noaptea nesfirsita', 'detectiv', 'Christie A.', true, '10.04.2020');
const newBook2 = new Book('Hotelul Bosfor', 'detectiv', 'Aykol E.', false, '05.10.2019');
const newBook3 = new Book('Prima noapte', 'mystical', 'Levy M.', false, '14.08.2020');
const newBook4 = new Book('Jurnalul unei fete greu de multumit', 'fiction', 'Acterian J.', false, date);
const newBook5 = new Book('Noaptea nesfirsita 2', 'detectiv', 'Christie A.', true, '10.04.2020');
const newBook6 = new Book('Hotelul Bosfor 2', 'detectiv', 'Aykol E.', false, '05.10.2019');
const newBook7 = new Book('Prima noapte 2', 'mystical', 'Levy M.', true, '14.08.2020');

const newBookList = new Booklist();

newBookList.add(newBook);
newBookList.add(newBook2);
newBookList.add(newBook3);
newBookList.add(newBook4);
newBookList.add(newBook5);
newBookList.add(newBook6);
newBookList.add(newBook7);

console.group('Before finish');
newBookList.getCurrentBook();
newBookList.getLastBook();
newBookList.getNextBook();
newBookList.getNumOfReadBooks();
newBookList.getNumOfUnReadBooks();
newBookList.getAllBooks();
console.groupEnd();

newBookList.finishCurrentBook();

console.group('After finish');
newBookList.getCurrentBook();
newBookList.getLastBook();
newBookList.getNextBook();
newBookList.getNumOfReadBooks();
newBookList.getNumOfUnReadBooks();
newBookList.getAllBooks();
console.groupEnd();

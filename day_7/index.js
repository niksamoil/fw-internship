/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

class Booklist {
  constructor(
    numOfReadBooks,
    numOfNotReadBooks,
    nextBook,
    currentBook,
    lastBook,
    allBooks
  ) {
    this.numOfReadBooks = 0;
    this.numOfNotReadBooks = 0;
    this.readBooks = [];
    this.unReadBooks = [];
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.allBooks = [];
  }

  add(book) {
    // console.log(book);
    console.log(this.allBooks);
    this.allBooks.push(book);
    if (book.read) {
      this.numOfReadBooks += 1;
      this.readBooks.push(book);
      this.lastBook = this.readBooks[this.readBooks.length - 1];
    }
    if (!book.read) {
      this.numOfNotReadBooks += 1;
      this.unReadBooks.push(book);
      this.nextBook = this.unReadBooks[0];
      // console.log(this.numOfNotReadBooks);
    }
  }

  // finishCurrentBook() {

  // }
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

const newBook = new Book('af', 'roman', 'creanga', true, '10');
const newBook2 = new Book('af', 'drama', 'eminescu', false, '5');
const newBook3 = new Book('af', 'drama', 'eminescu', false, '5');

const newBookList = new Booklist();
newBookList.add(newBook);
newBookList.add(newBook2);
newBookList.add(newBook3);

// console.log(newBook);

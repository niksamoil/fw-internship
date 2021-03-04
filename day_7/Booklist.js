/* eslint-disable no-console */
const date = new Date();

class Booklist {
  constructor(
    numOfReadBooks,
    numOfUnReadBooks,
    readBooks,
    unReadBooks,
    nextBook,
    currentBook,
    lastBook
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
    const [unReadbook] = this.unReadBooks;

    this.allBooks.push(book);
    if (book.read) {
      this.numOfReadBooks += 1;
      this.readBooks.push(book);
      this.lastBook = this.readBooks[this.readBooks.length - 1];
    }
    if (!book.read) {
      this.numOfUnReadBooks += 1;
      this.unReadBooks.push(book);
      this.nextBook = unReadbook;
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

export { Booklist, date };

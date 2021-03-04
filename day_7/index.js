/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable no-console */
import { Booklist, date } from './Booklist.js';
import Book from './Book.js';

const newBook = new Book('Noaptea nesfirsita', 'detectiv', 'Christie A.', true, '10.04.2020');
const newBook2 = new Book('Hotelul Bosfor', 'detectiv', 'Aykol E.', false, '05.10.2019');
const newBook3 = new Book('Prima noapte', 'mystical', 'Levy M.', false, '14.08.2020');
const newBook4 = new Book(
  'Jurnalul unei fete greu de multumit',
  'fiction',
  'Acterian J.',
  false,
  date
);
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

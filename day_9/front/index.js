/* eslint-disable no-console */
const book1 = {
  id: 2,
  author: 'M. Eminescu',
  name: 'Luceafarul',
  release: '10.14.2010',
  collection: 'Poeme'
};

const updBook = {
  id: 2,
  author: 'M. Eminescu',
  name: 'La mormântul lui Aron Pumnul',
  release: '01.10.1866',
  collection: 'Poezie'
};

const getBooks = fetch('http://localhost:3000/books')
  .then((response) => response.json())
  .then((response) => console.log(response));

console.log(getBooks);

async function postBooks(url, book = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return response;
}

postBooks('http://localhost:3000/books', book1);

async function updateBooks(id, bookUpdated) {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookUpdated)
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return response;
}

updateBooks(2, updBook);

async function deleteBooks(id) {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    method: 'DELETE'
  })
    .then((rs) => rs.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
  return response;
}

deleteBooks(5);

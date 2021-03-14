/* eslint-disable no-console */
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

const book1 = {
  id: 8,
  author: 'M. Eminescu',
  name: 'Luceafarul',
  release: '10.14.2010',
  collection: 'Poeme'
};

postBooks('http://localhost:3000/books', book1);

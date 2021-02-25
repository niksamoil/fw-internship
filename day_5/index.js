/* eslint-disable no-undef */
/* eslint-disable no-console */
const starWarsApiUrl = 'https://swapi.dev/api/people';

const getStarWarsPeople = (cb) => {
  fetch(starWarsApiUrl)
    .then((res) => res.json())
    .then(cb);
};
const pTag = document.querySelector('p#info');

getStarWarsPeople((res) => {
  console.log(res);
  const people = res.results[0].name;
  const count = res.count;

  pTag.innerHTML = `People count: ${count} <br/> First person name: ${people}`;
});

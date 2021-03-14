/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();

const router = express.Router();
const books = require('../services/booksApi');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
// const corsOptions = {
//   origin: 'http://127.0.0.1:5500/',
//   optionsSuccessStatus: 200
// };

router.use(cors());

/* GET books listing. */
router.get('/', (req, res, next) => {
  res.send(books).status(200).end();
});

router.post('/books', (req, res) => {
  console.log('post', req.body);
  books.push(req.body);

  return res.send(req.body).status(200).end();
});

router.put('/books/:id', (req, res) => {
  if (!Number(req.params.id)) {
    return res
      .status(400)
      .send({ error: `${req.params.id} is not a valid id` })
      .end();
  }

  const body = {
    author: req.body.author,
    name: req.body.name,
    release: req.body.release,
    collection: req.body.collection
  };

  console.log('put', req.body, req.params);

  const book = books.find((_book) => _book.id === Number(req.params.id));
  console.log({ book });

  Object.assign(book, body);

  return res.send(body).status(200).end();
});

app.listen(3001, () => {
  console.log('CORS-enabled web server listening on port 3000');
});

module.exports = router;

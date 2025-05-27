const express = require("express");

const app = express();
const port = 3000;

const books = [
  { id: 1, title: "Book1", author: "Author1" },
  { id: 2, title: "Book2", author: "Author2" },
];

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the home page",
  });
});

//get all books route
app.get("/books", (req, res) => {
  res.json(books);
});

//get a single book route
app.get("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

//add book
app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json(newBook);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

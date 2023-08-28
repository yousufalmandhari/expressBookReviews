const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});


// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(300).json({message: JSON.stringify(books,null,4)});
});


// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    return res.status(300).json({message: books[isbn]});
 });



// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;

    for (const bookId in books) {
        if (books.hasOwnProperty(bookId)) {
          const book = books[bookId];
          if (book.author === author) {
            return res.status(300).json({message: book});
          }
        }
      }
  
});


// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;

    for (const bookId in books) {
        if (books.hasOwnProperty(bookId)) {
          const book = books[bookId];
          if (book.title === title) {
            return res.status(300).json({message: book});
          }
        }
      }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;

    const book = books[isbn];

    return res.status(300).json({message: book.reviews});

    // for (const bookId in books) {
    //     if (books.hasOwnProperty(bookId)) {
    //       const book = books[bookId];
    //       if (book.title === title) {
    //         return res.status(300).json({message: book});
    //       }
    //     }
    //   }

    
});

module.exports.general = public_users;

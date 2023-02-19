import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  //   API call

  useEffect(() => {
    axios.get('https://www.anapioficeandfire.com/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //   Show and Hide 

  const handleClick = (book) => {
    if (currentBook === book) {
      setCurrentBook(null);
    } else {
      setCurrentBook(book);
    }
  };

  return (
    <div className="container mt-5">
      <h1>All Books</h1>
      <div className="row">

        {/* Map Method  */}

        {books.map((book, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">{book.authors.join(', ')}</p>
                {currentBook === book && (
                  <div>
                    <p className="card-text">Pages: {book.numberOfPages}</p>
                    <p className="card-text">Publisher: {book.publisher}</p>
                    <p className="card-text">Release Date: {book.released}</p>
                  </div>
                )}
                <button className="btn btn-primary" onClick={() => handleClick(book)}>
                  {currentBook === book ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

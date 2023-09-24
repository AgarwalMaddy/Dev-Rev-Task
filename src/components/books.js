import React, { useEffect, useState } from 'react';
import "../styles/books.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]); // State to manage the cart
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = 'https://library-api-v1.onrender.com/books';

        if (searchQuery) {
          apiUrl = `https://library-api-v1.onrender.com/books/search?query=${searchQuery}`;
        }

        const response = await fetch(apiUrl, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setRes(data.array);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [searchQuery]);

  const filteredBooks = res.filter(book => {
    return book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           book.author.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to add a book to the cart
  const addToCart = (book) => {
    // Retrieve the existing cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new book to the cart items
  const updatedCart = [...cartItems, book];

  // Save the updated cart to local storage
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <h2>List of All Books at the Store</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search books..."
          className="search-input"
          name = "searchBook"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <label for="searchBook" class="search_label">Search Keywords</label>
      </div>
      <div className="cards">
        {currentBooks.map((book, index) => (
          <article className="book-card" key={index}>
            <h2 className="title">{book.title}</h2>
            <p className="info"><strong>Author:</strong> {book.author}</p>
            {/* <p className="info"><strong>Synopsis:</strong> {book.synopsis}</p> */}
            <p className="info"><strong>Genre:</strong> {book.genre[0]}</p>
            <p className="info"><strong>Price:</strong> Rs. {(book.price)}</p>
            <p className="info"><strong>Number of Copies Available:</strong> {book.copies}</p>
            <p className="info"><strong>Availability:</strong> {(book.availability) ? "Available" : "Out of Stock"}</p>
            <button className="button" onClick={() => addToCart(book)}>Add to cart</button>
          </article>
        ))}
      </div>

      
      <div className="pagination">
        <ul>
          {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }, (_, i) => (
            <li key={i}>
              <button onClick={() => paginate(i + 1)}>{i + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Books;
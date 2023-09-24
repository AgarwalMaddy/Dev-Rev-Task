

// //ori

// import React, { useEffect, useState } from 'react';
// import "../styles/books.css";

// function Books() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [res, setRes] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
//   const itemsPerPage = 6; // Number of items to display per page

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let apiUrl = 'https://library-api-v1.onrender.com/books'; // Default API URL

//         if (searchQuery) {
//           // If a search query is present, modify the API URL to include it
//           apiUrl = `https://library-api-v1.onrender.com/books?q=${searchQuery}`;
//         }

//         const response = await fetch(apiUrl, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         setRes(data.array);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [searchQuery]); // Re-fetch data when searchQuery changes

//   // Filter books based on search query
//   const filteredBooks = res.filter(book => {
//     return book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//            book.author.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   // Calculate the indexes for the current page
//   const indexOfLastBook = currentPage * itemsPerPage;
//   const indexOfFirstBook = indexOfLastBook - itemsPerPage;
//   const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

//   // Function to handle page navigation
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Function to handle search input changes
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   if (loading) {
//     return <div className="loader"></div>;
//   }

//   return (
//     <div>
//       <h2>List of All Books at the Store</h2>
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search books..."
//           className="search-input"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//       </div>
//       <div className="cards">
//         {currentBooks.map((book, index) => (
//           <article className="information card" key={index}>
//             <h2 className="title">{book.title}</h2>
//             <p className="info"><strong>Author:</strong> {book.author}</p>
//             <p className="info"><strong>Year of Publishing:</strong> {book.synopsis}</p>
//             <p className="info"><strong>Number of Pages:</strong> {book.genre[0]}</p>
//             <p className="info"><strong>Number of Copies Available:</strong> {book.copies}</p>
//             <p className="info"><strong>Availability:</strong> {(!book.availability) ? "Available" : "Out of Stock"}</p>
//             <button className="button">Add to cart</button>
//           </article>
//         ))}
//       </div>
//       <div className="pagination">
//         <ul>
//           {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }, (_, i) => (
//             <li key={i}>
//               <button onClick={() => paginate(i + 1)}>{i + 1}</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Books;

//end ori;

// import React, { useEffect, useState } from 'react';
// import "../styles/books.css";

// function Books() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
//   const itemsPerPage = 6; // Number of items to display per page

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiUrl = `https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1`;

//         const response = await fetch(apiUrl, {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': 'b709c13d49mshb127a24a60f79b8p174f21jsn3f88518c6d9a',
//             'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         const bookList = data?.results || [];

//         // Add a copies field with random values to each book
//         const booksWithCopies = bookList.map(book => ({
//           ...book,
//           copies: Math.floor(Math.random() * 50) + 1,
//         }));

//         setBooks(booksWithCopies);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter books based on search query
//   const filteredBooks = books.filter(book => {
//     return book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//            book.authors.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   // Function to handle search input changes
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   if (loading) {
//     return <div className="loader"></div>;
//   }

//   return (
//     <div>
//       <h2>List of All Books at the Store</h2>
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search books..."
//           className="search-input"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//       </div>
//       <div className="cards">
//         {filteredBooks.map((book, index) => (
//           <article className="information card" key={index}>
//             <h2 className="title">{book.title}</h2>
//             <p className="info"><strong>Author:</strong> {book.authors}</p>
//             <p className="info"><strong>Number of Pages:</strong> {book.page_count}</p>
//             <p className="info"><strong>Year of Publishing:</strong> {book.copyright}</p>
//             <p className="info"><strong>Number of Copies Available:</strong> {book.copies}</p>
//             <button className="button">Add to cart</button>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Books;

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
          <article className="new-card" key={index}>
            <h2 className="title">{book.title}</h2>
            <p className="info"><strong>Author:</strong> {book.author}</p>
            <p className="info"><strong>Synopsis:</strong> {book.synopsis}</p>
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
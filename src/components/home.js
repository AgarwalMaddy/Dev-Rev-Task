// HomePage.js
import React from "react";
import "../styles/home.css";
import { NavLink } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

function Home() {
  return (
    <div className="home-container">
      <div className="book-background">
        <div className="left-container">
          <div className="description">
            <h2>LibraryCAFE : Bringing the aroma of coffee and the world of knowledge together in one place</h2>
            <h5>Explore a vast collection of books and resources.</h5>
          </div>
          <div className="search-box">
            <NavLink to="/books" className="link">
              <button className="searchButton">
                <AiOutlineSearch /> Search
              </button>
            </NavLink>
          </div>
        </div>
        <div className="right-container">
          <GiBookshelf className="custom-icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;

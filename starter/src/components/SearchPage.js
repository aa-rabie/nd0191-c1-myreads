import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Book from "./Book";
import { search, update } from "../BooksAPI";

const SearchPage = () => {
  const shelfBooks = useLoaderData().books || [];
  const [searchTxt, setSearchTxt] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchInputChange = async (e) => {
    setSearchTxt(e.target.value);
    let searchBooks = await search(e.target.value, 10);
    if (searchBooks && searchBooks.length > 0) {
      syncSearchBooksWithShelf(searchBooks, shelfBooks);
    }
    setSearchResults(searchBooks || []);
  };

  const updateBookShelf = async (book, shelf) => {
    book.shelf = shelf;
    await update(book, shelf);
  };

  function syncSearchBooksWithShelf(searchBooks, shelfBooks) {
    if (!shelfBooks || shelfBooks.length === 0) return;

    searchBooks.forEach(function (book) {
      let matchedBooks = shelfBooks.filter((b) => b.id === book.id);
      if (matchedBooks && matchedBooks.length > 0) {
        book.shelf = matchedBooks[0].shelf;
      }
    });
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={`/`}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchTxt}
            onChange={async (e) => await searchInputChange(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((book) => (
              <Book
                key={book.id}
                book={book}
                onShelfChangedAsync={updateBookShelf}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;

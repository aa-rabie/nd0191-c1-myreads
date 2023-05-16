import { useState } from "react";

const Book = ({ book, onShelfChangedAsync }) => {
  const [shelf, setShelf] = useState(book.shelf || "none");

  const updateBookShelf = async (e) => {
    setShelf(e.target.value);
    if (onShelfChangedAsync) {
      await onShelfChangedAsync(book, e.target.value);
    }
  };

  const hasThumbnail = book.imageLinks && book.imageLinks.thumbnail;
  const hasAuthors = book.authors && book.authors.length > 0;

  const coverStyle = {
    width: "128px",
    height: !hasThumbnail ? "180px" : "100%",
  };

  if (hasThumbnail) {
    coverStyle.backgroundImage = `url(${book.imageLinks.thumbnail})`;
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={coverStyle}></div>
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={async (e) => await updateBookShelf(e)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              {book.shelf && book.shelf.length > 0 && book.shelf !== "none" && (
                <option value="none">None</option>
              )}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {hasAuthors ? book.authors.join(", ") : ""}
        </div>
      </div>
    </li>
  );
};

export default Book;

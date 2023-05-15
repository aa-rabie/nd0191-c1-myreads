import { useRevalidator } from "react-router-dom";
import { update } from "../BooksAPI";

const Book = ({ book }) => {
  let revalidator = useRevalidator();

  const updateBookShelf = async (e) => {
    await update(book, e.target.value);
    revalidator.revalidate();
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: "128px",
              height: "100%",
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf || ""}
              onChange={async (e) => await updateBookShelf(e)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default Book;

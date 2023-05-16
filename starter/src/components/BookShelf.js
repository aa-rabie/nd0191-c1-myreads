import Book from "./Book";
import { useRevalidator } from "react-router-dom";
import { update } from "../BooksAPI";

const BookShelf = ({ shelfTitle, books }) => {
  const hasBooks = books && books.length > 0;
  const revalidator = useRevalidator();

  const updateBookShelf = async (book, shelf) => {
    book.shelf = shelf;
    await update(book, shelf);
    revalidator.revalidate();
  };

  return hasBooks ? (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              onShelfChangedAsync={updateBookShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  ) : (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <div>No books in shelf</div>
      </div>
    </div>
  );
};

export default BookShelf;

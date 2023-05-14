import Book from "./Book";
const BookShelf = ({ shelfTitle, books }) => {
  const hasBooks = books && books.length > 0;

  return hasBooks ? (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} />
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

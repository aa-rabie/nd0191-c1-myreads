import BookShelf from "./BookShelf";
const BooksListPage = ({ openSearch, books }) => {
  const crBooks = books.filter((b) => b.shelf === "currentlyReading");
  const wantToReadBooks = books.filter((b) => b.shelf === "wantToRead");
  const readBooks = books.filter((b) => b.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf shelfTitle="Currently Reading" books={crBooks} />
          <BookShelf shelfTitle="Want to Read" books={wantToReadBooks} />
          <BookShelf shelfTitle="Read" books={readBooks} />
        </div>
      </div>
      <div className="open-search">
        <a onClick={openSearch}>Add a book</a>
      </div>
    </div>
  );
};

export default BooksListPage;

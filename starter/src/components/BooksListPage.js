import { Link, useLoaderData } from "react-router-dom";
import BookShelf from "./BookShelf";

const BooksListPage = () => {
  const data = useLoaderData();

  const crBooks = data.books.filter((b) => b.shelf === "currentlyReading");
  const wantToReadBooks = data.books.filter((b) => b.shelf === "wantToRead");
  const readBooks = data.books.filter((b) => b.shelf === "read");
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
        <Link to={`search`}>Add a book</Link>
      </div>
    </div>
  );
};

export default BooksListPage;

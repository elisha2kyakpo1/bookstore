import Book from './Book';
import BookList from './BookList';
import CreateNewBook from './CreateNewBook';

function renderBooks() {
  return (
    <div className="render">
      <Book />
      <CreateNewBook />
      <BookList />
    </div>
  );
}

export default renderBooks;

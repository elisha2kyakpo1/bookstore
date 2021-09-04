import BookList from './BookList';
import CreateNewBook from './CreateNewBook';

function RenderBooks() {
  return (
    <div className="render">
      <BookList />
      <CreateNewBook />
    </div>
  );
}

export default RenderBooks;

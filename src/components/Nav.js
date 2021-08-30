import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="links">
        <Link to="/books">
          <li title="books">Books</li>
        </Link>
        <Link to="/categories">
          <li title="category">Categories</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

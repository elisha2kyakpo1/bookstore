import { Link } from 'react-router-dom';
import './Pages.css';

function Nav() {
  return (
    <nav className="nav">
      <h1>Bookstore CMS</h1>
      <ul className="links">
        <Link to="/home">
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

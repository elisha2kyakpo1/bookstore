import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
      <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
    </nav>
  );
}

export default Nav;

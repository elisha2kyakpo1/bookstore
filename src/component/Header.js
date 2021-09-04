import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <NavLink to="/" className="brand">Bookstore CMS</NavLink>
        <NavLink to="/" className="nav-link">BOOKS</NavLink>
        <NavLink to="/categories" className="nav-link">CATEGORIES</NavLink>
        <span className="user-avator"><FontAwesomeIcon icon={faUser} /></span>
      </nav>
    </header>
  );
}

export default Header;

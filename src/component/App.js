import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './Header';
import Books from './Books';
import Categories from '../redux/categories/Categories';
import { loadBooksAPI } from '../redux/books/Books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadBooksAPI()), []);
  return (
    <div className="bookstore">
      <div className="panel-bg">
        <Router>
          <Header />
          <div className="header-line" />
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

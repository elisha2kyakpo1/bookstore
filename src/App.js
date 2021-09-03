import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import RenderBooks from './components/RenderBooks';
import Categories from './redux/categories/Categories';
import './App.css';
import { getBooks } from './redux/books/Books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getBooks()), []);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <RenderBooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

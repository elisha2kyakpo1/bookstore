import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from './Nav';
import './App.css';
import { fetchBooksApi } from './ApiData';
import Categories from '../redux/categories/Categories';
import RenderBooks from './RenderBooks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBooksApi()), []);
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

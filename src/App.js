import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import RenderBooks from './components/RenderBooks';
import Categories from './redux/categories/Categories';
import './App.css';

function App() {
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

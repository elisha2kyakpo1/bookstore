import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Books from './redux/books/Books';
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
            <Books />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/course">Course</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>

      <Switch>
        <Route path="/registration">
          {/* TODO */}
        </Route>
        <Route path="/about">
          {/* TODO */}
        </Route>
        <Route path="/course">
          {/* TODO */}
        </Route>
        <Route path="/">
          {/* TODO */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

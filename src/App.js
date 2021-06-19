import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './about/About'

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

        <Switch>
          <Route path="/registration">
            {/* TODO */}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/course">
            {/* TODO */}
          </Route>
          <Route path="/">
            {/* TODO */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

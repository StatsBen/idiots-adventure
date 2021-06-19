import "./app.css";
import "./nav-bar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./about/About";
import Course from "./course/Course";
import Home from "./home/Home";
import Registration from "./registration/Registration";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="nav-bar-container">
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
            <Registration />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

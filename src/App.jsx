import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="bg-gray-800 p-6">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link to={Home} className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/contact">{/*  <ContactPage /> */}</Route>
          <Route path="/">{/* <HomePage /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

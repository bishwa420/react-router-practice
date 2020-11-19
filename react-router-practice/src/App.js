import React from "react"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"

import Category from "./component/Category";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

{/*
    const Category = () => (
        <div>
            <h2>Category</h2>
        </div>
    )*/
}

const Products = () => (
    <div>
      <h2>Products</h2>
    </div>
)

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-light">
            <ul className="navbar navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>

          </nav>

          <Switch>
              <Route exact path="/"><Home/></Route>
              <Route path="/category"><Category/></Route>
              <Route path="/products"><Products/></Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;

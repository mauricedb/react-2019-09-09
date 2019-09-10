import React from "react";
import "./App.css";

import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Cat from "./components/Cat";
import Dog from "./components/Dog";

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <header>
            <Link to="/cat">Cat</Link>
            <span> | </span>
            <Link to="/dog">Dog</Link>
            <span> | </span>
            <a href="/other-app.html">Other application</a>
          </header>

          <Switch>
            <Route path="/cat/:catName" component={Cat} />
            <Route path="/cat" component={Cat} />
            <Route path="/dog" render={() => <Dog />} />
            <Route render={() => <div>Page not found</div>} />
          </Switch>

          {/* <Cat />
        <Dog /> */}
        </div>
      </HashRouter>
      {/* <Dog /> */}
    </>
  );
}

export default App;

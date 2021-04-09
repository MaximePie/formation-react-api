import React from "react";
import MielPage from "./components/MielPage"
import PopcornPage from "./components/PopcornPage"
import Home from "./components/Home";

import {
  BrowserRouter, NavLink, Route, Switch
} from "react-router-dom";
import Navbar from "./components/Navbar";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Ma super app</h2>
          <Navbar/>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/miel'>
              <MielPage/>
            </Route>
            <Route path='/popcorn'>
              <PopcornPage/>
            </Route>
          </Switch>
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    )
  }
}

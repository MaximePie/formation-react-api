import React from "react";
import MielPage from "./components/pages/MielPage"
import CreateMielPage from "./components/pages/CreateMielPage"
import PopcornPage from "./components/pages/PopcornPage"
import CreatePopcornPage from "./components/pages/CreatePopcornPage"
import Home from "./components/pages/Home";

import {
  BrowserRouter, NavLink, Route, Switch
} from "react-router-dom";
import Navbar from "./components/molecules/Navbar";

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
            <Route path='/createMiel'>
              <CreateMielPage/>
            </Route>
            <Route path='/popcorn'>
              <PopcornPage/>
            </Route>
            <Route path='/createPopcorn'>
              <CreatePopcornPage/>
            </Route>
          </Switch>
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    )
  }
}

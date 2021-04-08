import React from "react";
import MielPage from "./components/MielPage"
import PopcornPage from "./components/PopcornPage"
import Home from "./components/Home";

import {
  BrowserRouter,
  Route,
  NavLink,
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Ma super app</h2>
          <div>
            <NavLink to="/home">Accueil</NavLink>
            <NavLink to="/miel">miel</NavLink>
            <NavLink to="/popcorn">popcorn</NavLink>
            <a href="https://reactrouter.com/web/api/NavLink">Documentation Navlink</a>
          </div>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/miel'>
            <MielPage/>
          </Route>
          <Route path='/popcorn'>
            <PopcornPage/>
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

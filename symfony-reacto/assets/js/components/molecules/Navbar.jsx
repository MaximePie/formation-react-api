import React from 'react';
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink to="/" activeClassName="Navbar__link--active" exact>Home</NavLink>
        <NavLink to="/miel" activeClassName="Navbar__link--active">Miel</NavLink>
        <NavLink to="/popcorn" activeClassName="Navbar__link--active">Popcorn</NavLink>
      </div>
    )
  }
}

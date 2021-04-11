/**
 |==========================================================================================
 | The component that renders the navbar
 |------------------------------------------------------------------------------------------
 */

import React from 'react';
import { SearchBox } from '../containers/searchBox';

const NavBar = () =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">HNGRY</a>
        <form className="navbar-form navbar-left">
          <SearchBox />
        </form>
      </div>
    </div>
  </nav>;

export default NavBar;

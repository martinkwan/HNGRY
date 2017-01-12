import React, { Component } from 'react';
import SearchBox from '../containers/searchBox';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">HNGRY</a>
            <form className="navbar-form navbar-left">
              <SearchBox />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

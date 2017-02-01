/**
 |==========================================================================================
 | The parent component of the app
 |------------------------------------------------------------------------------------------
 */

import React, { Component } from 'react';
import NavBar from './NavBar';
import Map from '../containers/Map';
import ListContainer from './ListContainer';

require('../../styles/style.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 map-container">
              <Map />
            </div>
            <div className="col-sm-4">
              <ListContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

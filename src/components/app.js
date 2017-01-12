import React, { Component } from 'react';
import NavBar from './navBar';
import Map from '../containers/map';
import ListContainer from './listContainer';

require('../../styles/style.scss');

export default class App extends Component {
  render() {
    // San francisco is default center
    // const initialCenter = { lng: -122.395902, lat: 37.781615 };
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

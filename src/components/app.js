import React, { Component } from 'react';
import NavBar from './navBar';
import Map from '../containers/map';
import RestaurantList from './restaurantList';

require('../../styles/style.scss');

export default class App extends Component {
  render() {
    // San francisco is default
    const initialCenter = { lng: -122.395902, lat: 37.781615 };
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 map-container">
              <Map initialCenter={initialCenter} />
            </div>
            <div className="col-sm-4">
              <RestaurantList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

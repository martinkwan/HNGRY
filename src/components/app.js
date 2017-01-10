import React, { Component } from 'react';
import NavBar from './navBar';
import Map from './map';
import RestaurantList from './restaurantList';

require('../../styles/style.scss');


export default class App extends Component {
  render() {
    const initialCenter = { lng: -90.1056957, lat: 29.9717272 };
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

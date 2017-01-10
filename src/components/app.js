import React, { Component } from 'react';
import NavBar from './navBar';
import Map from './map';
import RestaurantList from './restaurantList';

require('../../styles/style.scss');


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="col-sm-8">
              <Map />
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

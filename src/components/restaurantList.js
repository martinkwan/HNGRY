import React from 'react';
import DropDown from './dropDown';

const restaurantList = () =>
  <div className="restaurant-list">
    <div className="list-header">
      <h4 className="list-text">Sort Restaurants By:</h4>
      <DropDown />
    </div>
    {/* <List /> */}
  </div>;

export default restaurantList;

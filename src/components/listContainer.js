/**
 |==========================================================================================
 | The component that renders the container that holds the list of places and dropdown
 |------------------------------------------------------------------------------------------
 */

import React from 'react';
import DropDown from '../containers/dropDown';
import List from '../containers/list';

const ListContainer = () =>
  <div className="list">
    <div className="list-header">
      <h5 className="list-text">Sort Restaurants By:</h5>
      <DropDown />
    </div>
    <List />
  </div>;

export default ListContainer;

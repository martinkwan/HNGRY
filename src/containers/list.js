import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '../components/listItem';

class List extends Component {

  render() {
    return (
      <div>
        {this.props.places.map((place, index) => {
          return (
            <ListItem
              place={place}
              key={index}
            />
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchLocation: state.searchLocation,
    filter: state.filter,
    places: state.places,
  };
}

export default connect(mapStateToProps)(List);

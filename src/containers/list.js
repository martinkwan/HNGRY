/**
 |==========================================================================================
 | This is a container that displays the list of restaurants.
 | Needs access to redux state.
 | Does not need to dispatch to redux state.
 |
 | A. When redux's places state is updated via the map container:
 |  1. This list rerenders with the new places.
 |------------------------------------------------------------------------------------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '../components/listItem';

class List extends Component {
  /**
   * Scroll up when list is applied a new filter
   */
  componentDidUpdate() {
    document.getElementById('list-scroll').scrollTop = 0;
  }

  render() {
    return (
      <div id="list-scroll" className="list-scroll">
        {this.props.places.map((place, index) =>
          (
            <div key={place.place_id} className="list-item-container">
              <h4 className="list-item-number">{index + 1}</h4>
              <ListItem
                place={place}
              />
            </div>
          )
        )}
      </div>
    );
  }
}

List.propTypes = {
  places: PropTypes.array.isRequired,
};

function mapStateToProps({ places }) {
  return {
    places,
  };
}

export default connect(mapStateToProps)(List);

/**
 * ==========================================================================================
 * This is a container that displays the list of restaurants.
 * It needs access to the searchLocation, filter, and places from the redux state.
 * When searchLocation is updated, this list updates
 * Does not need to dispatch to the redux state.
 *
 * While this is a container, React is not actually being used to manipulate the
 * DOM here. We simply call a function that will directly go to our canvas and
 * ------------------------------------------------------------------------------------------
 */

import React, { Component, PropTypes } from 'react';
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
            <div key={place.id} className="list-item-container">
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

function mapStateToProps(state) {
  return {
    searchLocation: state.searchLocation,
    filter: state.filter,
    places: state.places,
  };
}

export default connect(mapStateToProps)(List);

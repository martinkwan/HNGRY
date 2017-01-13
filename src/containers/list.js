/**
 |==========================================================================================
 | This is a container that displays the list of restaurants.
 | It needs access to places from the redux state.
 |
 | When redux's places state is updated, this list rerenders with the updated places
 |
 | Does not need to dispatch to the redux state.
 |
 |------------------------------------------------------------------------------------------
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

function mapStateToProps({ places }) {
  return {
    places,
  };
}

export default connect(mapStateToProps)(List);

/**
 |==========================================================================================
 | This is a container that displays the list of filters.
 | It needs to dispatch to redux state.
 | Does not need to access to redux state.
 |
 | A. When a filter is selected:
 |  1. The updateFilter action is dispatched to the reducers with the filter category.
 |  2. Redux's filter state is updated.
 |  3. This map rerenders with the markers with the numbers in the sorted order.
 |  4. Eventually list container is updated via map container changing redux's place state
 |------------------------------------------------------------------------------------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilter } from '../actions/index';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      selected: 'Filter By',
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  /**
   * Updates redux filterstate with selected item if new selection
   */
  select(item) {
    if (this.state.selected !== item) {
      this.state.selected = item;
      this.props.updateFilter(this.state.selected);
    }
  }

  show() {
    this.setState({ listVisible: true });
    document.addEventListener('click', this.hide);
  }

  hide() {
    this.setState({ listVisible: false });
    document.removeEventListener('click', this.hide);
  }

  render() {
    return (
      <span className="dropdown-container">
        <button
          className="btn-default dropdown-toggle"
          onClick={this.show}
        >
          {this.state.selected}
          <span className="caret" />
        </button>
        <div className={`dropdown-list${this.state.listVisible ? '-show' : ''}`}>
          <div><button onClick={() => this.select('Ratings')}>Ratings</button></div>
          <div><button onClick={() => this.select('Price')}>Price</button></div>
        </div>
      </span>
    );
  }
}

DropDown.propTypes = {
  updateFilter: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFilter }, dispatch);
}

export default connect(null, mapDispatchToProps)(DropDown);

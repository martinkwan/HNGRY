import React, { Component, PropTypes } from 'react';
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

  select(item) {
    this.state.selected = item;
    this.props.updateFilter(this.state.selected);
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

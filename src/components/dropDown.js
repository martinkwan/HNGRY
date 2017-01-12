import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilter } from '../actions/index';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      selected: 'Reviews',
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
    document.addEventListener("click", this.hide);
  }

  hide() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
  }

  render() {
    return (
      <span className="dropdown-container">
        <button
          onClick={this.show}
        >
          <span className="default-filter">{this.state.selected}</span>
          <span className="caret" />
        </button>
        <div className={`dropdown-list${this.state.listVisible ? '-show' : ''}`}>
          <ul>
            <div><button onClick={() => this.select('Action')}>Action</button></div>
            <div><button onClick={() => this.select('Ratings')}>Ratings</button></div>
            <div><button onClick={() => this.select('Distance')}>Distance</button></div>
            <div><button onClick={() => this.select('Price')}>Price</button></div>
          </ul>
        </div>
      </span>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFilter }, dispatch);
}

export default connect(null, mapDispatchToProps)(DropDown);

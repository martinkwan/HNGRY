import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMap } from '../actions/index';

class SearchBox extends Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  /**
   * Prevent submitting page when the user presses enter in the searchbar
   * User should only search via autocomplete selection
   * @param  {Object} event
   */
  onFormSubmit(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    const autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
    autocomplete.addListener('place_changed', () => this.props.updateMap(autocomplete.getPlace()));
  }

  render() {
    return (
      <div className="form-group">
        <input
          id="autocomplete"
          type="text"
          className="form-control"
          placeholder="Search"
          onKeyDown={this.onFormSubmit}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMap }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBox);

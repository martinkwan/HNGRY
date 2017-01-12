import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMap } from '../actions/index';

class SearchBox extends Component {

  componentDidMount() {
    this.initAutocomplete();
  }
  /**
   * TODO: Submit first entry of auto complete when enter is pressed.
  * Prevent submitting page when the user presses enter in the searchbar
  * User should only search via autocomplete selection
  * @param  {Object} event
  */
  onFormSubmit(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }
  /**
   * Create autocomplete object to search geographical location types only
   */
  initAutocomplete() {
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

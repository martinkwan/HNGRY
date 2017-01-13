import React, { Component, PropTypes } from 'react';

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: Math.round(this.props.percentage * 2) / 2 };
  }
  calculateStars(num) {
    if (this.state.rating >= num) {
      return 'fa fa-star';
    } else if (num - 0.5 === this.state.rating) {
      return 'fa fa-star-half-o';
    }
    return 'fa fa-star-o';
  }
  render() {
    return (
      <span>
        {this.state.rating || 'Rating N/A'} &nbsp;
        <i className={this.calculateStars(1)} />
        <i className={this.calculateStars(2)} />
        <i className={this.calculateStars(3)} />
        <i className={this.calculateStars(4)} />
        <i className={this.calculateStars(5)} />
      </span>
    );
  }
}

Rating.propTypes = {
  percentage: PropTypes.number,
};

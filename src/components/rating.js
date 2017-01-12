import React, { Component } from 'react';

export default class Rating extends Component {
  calculateStars(num) {
    const rating = Math.round(this.props.percentage * 2) / 2;
    if (rating >= num) {
      return 'fa fa-star';
    } else if (num - 0.5 === rating) {
      return 'fa fa-star-half-o';
    }
    return 'fa fa-star-o';
  }
  render() {
    return (
      <div className="">
        <div className="">
          <i className={this.calculateStars(1)} />
          <i className={this.calculateStars(2)} />
          <i className={this.calculateStars(3)} />
          <i className={this.calculateStars(4)} />
          <i className={this.calculateStars(5)} />
        </div>
      </div>
    );
  }
}

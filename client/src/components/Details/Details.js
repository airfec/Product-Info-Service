import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
  }

  render() {
    return (
      <div className="details section">
        <p>{this.props.room.short_description}</p>
        <div className="clickable">
          <a href="url">
            Read more about the space{' '}
            <FontAwesome name="angle-down" size="lg" />
          </a>
        </div>
        <div className="clickable">
          <a href="url">Contact host</a>
        </div>
      </div>
    );
  }
}

export default Details;

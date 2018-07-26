import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PopUp from './../Amenities/PopUp.js';

class Amenities extends Component {
  constructor(props) {
    super(props);
    console.log('amenities here', this.props.amenities);
    this.state = {
      showAllClicked: false
    };
    this.handleClickShowAll = this.handleClickShowAll.bind(this);
  }

  handleClickShowAll() {
    this.setState({ showAllClicked: true });
  }

  render() {
    let amenitiesArr = this.props.amenities;
    console.log('amenities render', this.props.amenities);

    if (typeof amenitiesArr !== 'object') {
      amenitiesArr = ['here', 'test test test test test test'];
    }
    return (
      <div>
        <a className="toggle-more" onClick={this.handleClickShowAll}>
          {' '}
          Show all {amenitiesArr.length} amenities{' '}
        </a>
        {this.state.showAllClicked ? (
          <PopUp amenities={this.props.amenities} />
        ) : null}
      </div>
    );
  }
}

export default Amenities;

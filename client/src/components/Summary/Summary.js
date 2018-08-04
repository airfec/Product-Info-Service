import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  capitilalize(string) {
    let first = string[0].toUpperCase();
    let rest = string.substring(1);
    return first + rest;
  }

  render() {
    let sleepArr = this.props.room.sleeping_arrangements;

    if (typeof sleepArr !== 'object') {
      sleepArr = ['0 here', '0 test test test test test test'];
    }

    // let first = props.room.title[0] || '';
    // let rest = props.room.title[1] || '';
    // let title = first + rest;

    let noOfBeds = sleepArr.reduce((total, room, index) => {
      total = total + parseInt(room[0]);
      return total;
    }, 0);

    return (
      <div className="summary section">
        <div className="section-wrapper">
          <div className="sum__top">
            <div className="sum__top--left">
              <span className="room-type">{this.props.room.type}</span>
              {/* <h1>{this.capitilalize(this.props.room.title || '')}</h1> */}
              <h1 className="room-title">{this.props.room.title}</h1>
              <div className="room__city">{this.props.room.city}</div>
            </div>
            <div className="sum__top--right" align="right" alt="Avatar">
              <img src={this.props.room.avatar} className="avatar-image" />
              <div className="host-name">
                <p className="host-name__text">
                  {this.props.room.host_username}
                </p>
              </div>
            </div>
          </div>
          <div className="sum__bottom">
            <div className="sum-single-icon">
              <div className="sum-icon">
                <FontAwesome name="users" size="lg" />{' '}
              </div>
              <div className="sum-icon-name">
                {this.props.room.max_guest} guests
              </div>
            </div>
            <div className="sum-single-icon">
              <div className="sum-icon">
                <FontAwesome name="home" size="lg" />{' '}
              </div>
              <div className="sum-icon-name">
                {this.props.room.beds} bedrooms
              </div>
            </div>
            <div className="sum-single-icon">
              <div className="sum-icon">
                <FontAwesome name="bed" size="lg" />{' '}
              </div>
              <div className="sum-icon-name">
                {this.props.room.beds > 1
                  ? `${this.props.room.beds} beds`
                  : `${this.props.room.beds} bed`}
              </div>
            </div>
            <div className="sum-single-icon">
              <div className="sum-icon">
                <FontAwesome name="bathtub" size="lg" />{' '}
              </div>
              <div className="sum-icon-name">
                {this.props.room.baths > 1
                  ? `${this.props.room.baths} baths`
                  : `${this.props.room.baths} bath`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;

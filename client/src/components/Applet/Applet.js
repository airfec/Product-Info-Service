import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import Summary from './../Summary/Summary.js';
import Highlights from './../Highlights/Highlights.js';
// import HighlightItem from '../Highlights/HighlightItem.js';
import Details from './../Details/Details.js';
import Sleeping from './../Sleeping Arrangments/Sleeping.js';

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: ''
    };
  }

  // componentWillMount(){}
  componentDidMount() {
    const id = parseInt(window.location.pathname.split('/').pop());
    const self = this;
    $.get(`/api/rooms/${id}`, function(data) {
      console.log('success got data', data);
      self.setState({ room: data });
    }).fail(function() {
      alert('error');
    });
    // console.log('state now: ', this.state.room);
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  // getRoomInfo() {

  // }

  render() {
    return (
      <div>
        <Summary className="summary section" room={this.state.room} />
        <Highlights
          highlights={this.state.room.highlights}
          className="highlights section"
        />
        <Details room={this.state.room} />
        <div className="line"> </div>
        <div className="amenities section">amenities</div>
        <div className="line"> </div>
        <Sleeping room={this.state.room} />
        <div className="rules section">house rules</div>
        <div className="line"> </div>
        <div className="cancelations section">canceletations</div>
        <div className="line"> </div>
      </div>
    );
  }
}

export default Applet;
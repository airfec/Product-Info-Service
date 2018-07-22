import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    };
  }

  // componentWillMount(){}
  componentDidMount() {
    const id = parseInt(window.location.pathname.split('/').pop());
    const self = this;
    $.get(`/api/rooms/${id}`, function(data) {
      console.log('success got data', data);
      // self.setState({ hello: data });
    }).fail(function() {
      alert('error');
    });
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
        <h1>
          Hello {this.state.hello} <FontAwesome name="rocket" size="2x" />
        </h1>
        <div className="summary section">summary</div>
        <div className="highlights section">highlights</div>
        <div className="details section">
          details
          <div className="line"> </div>
        </div>
        <div className="amenities section">
          amenities
          <div className="line"> </div>
        </div>
        <div className="sleeping section">
          sleeping arrangements
          <div className="line"> </div>
        </div>
        <div className="rules section">
          house rules
          <div className="line"> </div>
        </div>
        <div className="cancelations section">
          canceletations
          <div className="line"> </div>
        </div>
      </div>
    );
  }
}

export default Applet;

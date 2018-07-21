import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import $ from "jquery";

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "world"
    };
  }

  // componentWillMount(){}
  componentDidMount() {
    const id = parseInt(window.location.pathname.split("/").pop());
    const self = this;
    $.get(`/api/rooms/${id}`, function(data) {
      console.log("success got data", data);
      // self.setState({ hello: data });
    }).fail(function() {
      alert("error");
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
        <button>for test</button>
      </div>
    );
  }
}

export default Applet;

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

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

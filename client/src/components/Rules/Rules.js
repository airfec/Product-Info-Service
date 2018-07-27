import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Rules extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rulesArr = this.props.room.house_rules;

    if (typeof rulesArr !== 'object') {
      rulesArr = ['here', 'test test'];
    }
    let rules = rulesArr.map((rule, index) => (
      <div key={index} className="single--rule__item">
        {rule}
      </div>
    ));

    return (
      <div className="rules section">
        <div className="rules__title">House Rules</div>
        <div className="rules__list">{rules}</div>
        <a className="toggle-more">
          Read all rules{' '}
          <FontAwesome name="angle-down" size="lg" className="awesome" />
        </a>
      </div>
    );
  }
}

export default Rules;

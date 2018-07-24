import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Rules = props => {
  let rulesArr = props.room.house_rules;

  if (typeof rulesArr !== 'object') {
    rulesArr = ['here', 'test test'];
  }
  let rules = rulesArr.map(rule => <li>{rule}</li>);

  return (
    <div className="rules section">
      <div>House Rules</div>
      <ul>{rules}</ul>
      <a href="url" className="clickable">
        Read all rules{' '}
        <FontAwesome name="angle-down" size="lg" className="awesome" />
      </a>
    </div>
  );
};

export default Rules;

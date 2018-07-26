import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Cancellation = props => {
  let cancellationArr = props.room.cancellations;

  if (typeof cancellationArr !== 'object') {
    cancellationArr = ['here', 'test test'];
  }
  let terms = cancellationArr.map(term => <li>{term}</li>);

  return (
    <div className="rules section">
      <div>Cancellations</div>
      <ul>{terms}</ul>
      <a href="url" className="toggle-more">
        Read more about the policy{' '}
        <FontAwesome name="angle-down" size="lg" className="awesome" />
      </a>
    </div>
  );
};

export default Cancellation;

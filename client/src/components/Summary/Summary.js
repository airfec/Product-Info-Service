import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Summary = props => {
  return (
    <div className="summary">
      <div className="sum_top">
        <div className="part1 left">
          <div className="type">
            <span>{props.room.type}</span>
          </div>
          <div className="title">
            <span>{props.room.title}</span>
          </div>
          <div className="city">
            <span>{props.room.city}</span>
          </div>
        </div>
        <div className="part2 right" align="right" alt="Avatar">
          <img src={props.room.avatar} />
          <p>{props.room.host_username}</p>
        </div>
      </div>
      <div className="sum_bottom">
        <span> {props.room.max_guest} guests</span>
        <span>
          {' '}
          <FontAwesome name="door-open" size="2x" /> {props.room.beds} bedrooms{' '}
        </span>
        <span> beds</span>
        <span> {props.room.baths} baths</span>
      </div>
    </div>
  );
};

export default Summary;

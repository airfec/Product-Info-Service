import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { totalmem } from 'os';

const Summary = props => {
  let sleepArr = props.room.sleeping_arrangements;

  if (typeof sleepArr !== 'object') {
    sleepArr = ['0 here', '0 test test test test test test'];
  }

  let noOfBeds = sleepArr.reduce((total, room, index) => {
    total = total + parseInt(room[0]);
    return total;
  }, 0);

  return (
    <div className="summary">
      <div className="sum__top">
        <div className="--left">
          <div className="room__type">
            <span>{props.room.type}</span>
          </div>
          <div className="room__title">
            <span>{props.room.title}</span>
          </div>
          <div className="room__city">
            <span>{props.room.city}</span>
          </div>
        </div>
        <div className="--right" align="right" alt="Avatar">
          <div>
            <img src={props.room.avatar} />
          </div>
          <div>
            <p>{props.room.host_username}</p>
          </div>
        </div>
      </div>
      <div className="sum__bottom">
        <span className="icons">
          {' '}
          <FontAwesome name="users" size="lg" /> {props.room.max_guest} guests
        </span>
        <span className="icons">
          {' '}
          <FontAwesome name="home" size="lg" /> {props.room.beds} bedrooms
        </span>
        <span className="icons">
          <FontAwesome name="bed" size="lg" /> {noOfBeds} beds
        </span>
        <span className="icons">
          {' '}
          <FontAwesome name="bathtub" size="lg" /> {props.room.baths} baths
        </span>
      </div>
    </div>
  );
};

export default Summary;

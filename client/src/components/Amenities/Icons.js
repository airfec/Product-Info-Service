import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Icons = props => {
  let amenitiesArr = props.amenities;

  if (typeof amenitiesArr !== 'object') {
    amenitiesArr = [
      {
        _id: '5b591d928f0a5f0970152179',
        amenityType: 'Bed and bath',
        name: 'Hair dryer',
        icon: '',
        explanation: ''
      }
    ];
  }
  let iconCounter = 1;
  let iconsLeft = [];
  let iconsRight = [];

  while (iconCounter <= 6 && amenitiesArr.length >= 6) {
    for (let i = 0; i < amenitiesArr.length; i++) {
      let current = amenitiesArr[i];
      if (iconCounter <= 3 && current.icon.length > 0) {
        iconsLeft.push(
          <div className="amenities-single-icon" key={`${i}-left`}>
            <div className={`${current.icon} icon--display__left`} key={i} />
            <div className="amenity-name__icon" key={current.name}>
              {current.name}
            </div>
          </div>
        );
        iconCounter++;
      } else if (
        iconCounter > 3 &&
        iconCounter <= 6 &&
        current.icon.length > 0
      ) {
        let keyValue = '' + i + ' ' + i;
        iconsRight.push(
          <div className="amenities-single-icon" key={`${i}-right`}>
            <div
              className={`${current.icon} icon--display__right`}
              key={keyValue}
            />
            <div className="amenity-name__icon" key={current.name}>
              {current.name}
            </div>
          </div>
        );
        iconCounter++;
      } else {
        break;
      }
    }
  }

  return (
    <div className="amenities__icons">
      <div className="amenities-left">{iconsLeft}</div>
      <div className="amenities-right">{iconsRight}</div>
    </div>
  );
};

export default Icons;

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Icons = props => {
  let amenitiesArr = props.amenities;
  console.log('inside icons before', amenitiesArr);

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
  console.log('inside icons after', amenitiesArr);

  let iconCounter = 1;
  let iconsLeft = [];
  let iconsRight = [];

  for (let i = 0; i < amenitiesArr.length; i++) {
    let current = amenitiesArr[i];
    while (iconCounter <= 6 && amenitiesArr.length > 6) {
      if (iconCounter <= 3 && current.icon.length > 0) {
        iconsLeft.push(
          <div className={`${current.icon} icon--display__left`}>
            {current.name}
          </div>
        );
        iconCounter++;
      }
      if (iconCounter > 3) {
        iconsRight.push(
          <div className={`${current.icon} icon--display__right`}>
            {current.name}
          </div>
        );
        iconCounter++;
      }
    }
  }

  return (
    <div className="amenities__icons">
      <div>{iconsLeft}</div>
      <div>{iconsLeft}</div>
    </div>
  );
};

export default Icons;

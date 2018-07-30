import React, { Component } from 'react';
import ReactModal from 'react-modal';

if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('div');
}

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formObject(arr) {
    let amenitiesArr = arr.slice();
    let amenitiesObj = {};
    for (let i = 0; i < amenitiesArr.length; i++) {
      let type = amenitiesArr[i].amenityType;
      let obj = {
        name: amenitiesArr[i].name,
        icon: amenitiesArr[i].icon,
        explanation: amenitiesArr[i].explanation
      };
      if (amenitiesObj[type]) {
        amenitiesObj[type].push(obj);
      } else {
        amenitiesObj[type] = [obj];
      }
    }
    return amenitiesObj;
  }

  render() {
    let amenitiesArr = this.props.amenities;
    console.log('popup render', this.props.amenities);

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

    let amenitiesObj = this.formObject(amenitiesArr);
    let renderArr = [];
    for (let type in amenitiesObj) {
      renderArr.push(<div className="amenity__type">{type}</div>);
      for (let i = 0; i < amenitiesObj[type].length; i++) {
        let amenity = amenitiesObj[type][i];
        renderArr.push(<div className="amenity__name">{amenity.name}</div>);
        if (amenity.explanation.length > 0) {
          renderArr.push(
            <div className="amenity__exp">{amenity.explanation}</div>
          );
        }
        if (i < amenitiesObj[type].length - 1) {
          renderArr.push(<div className="line"> </div>);
        }
      }
    }

    return (
      <div className="amenities-popup">
        <div className="amenitiess-popup__inner">
          <i className="fa fa-times" aria-hidden="true" size="lg" />
          <div>{renderArr}</div>
        </div>
      </div>
    );
  }
}

export default PopUp;

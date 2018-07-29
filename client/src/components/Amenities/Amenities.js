import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PopUp from './../Amenities/PopUp.js';
import ReactModal from 'react-modal';
import Icons from './Icons.js';

ReactModal.setAppElement('#root');

class Amenities extends Component {
  constructor(props) {
    super(props);
    console.log('amenities here', this.props.amenities);
    this.state = {
      showPopUp: false
    };
    this.handleClickShowAll = this.handleClickShowAll.bind(this);
    this.handleClosePopUp = this.handleClosePopUp.bind(this);
  }

  handleClickShowAll() {
    this.setState({ showPopUp: true });
  }

  handleClosePopUp() {
    this.setState({ showPopUp: false });
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

  renderModal() {
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
      renderArr.push(
        <div className="amenity__type" key={type}>
          {type}
        </div>
      );
      for (let i = 0; i < amenitiesObj[type].length; i++) {
        let amenity = amenitiesObj[type][i];
        renderArr.push(
          <div className="amenity__name" key={i}>
            {amenity.name}
          </div>
        );
        if (amenity.explanation.length > 0) {
          renderArr.push(
            <div className="amenity__exp" key={`${i} ${i}`}>
              {amenity.explanation}
            </div>
          );
        }
        if (i < amenitiesObj[type].length - 1) {
          renderArr.push(<div className="line"> </div>);
        }
      }
    }
    return renderArr;
  }

  render() {
    let amenitiesArr = this.props.amenities;

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
    return (
      <div>
        <div className="amenities section">
          <div>Amenities</div>
          <div className="icons--display">
            <Icons amenities={amenitiesArr} />
          </div>
          <a className="toggle-more" onClick={this.handleClickShowAll}>
            {' '}
            Show all {amenitiesArr.length} amenities{' '}
          </a>
          <ReactModal
            isOpen={this.state.showPopUp}
            onClose={() => this.handleClosePopUp()}
          >
            <i
              className="fa fa-times"
              aria-hidden="true"
              size="lg"
              onClick={() => this.handleClosePopUp()}
            />
            <div>{this.renderModal()}</div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Amenities;

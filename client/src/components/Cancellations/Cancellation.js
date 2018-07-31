import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Cancellation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoreClicked: false
    };
    console.log('can', this.props.room);
    this.handleClickMore = this.handleClickMore.bind(this);
  }

  handleClickMore() {
    this.setState({ isMoreClicked: !this.state.isMoreClicked });
  }

  render() {
    let cancellationArr = this.props.room.cancellation || [];

    // if (typeof this.props.room.cancellation !== 'object') {
    //   cancellationArr = ['here', 'test test'];
    // } else {
    //   cancellationArr = this.props.room.cancellations;
    // }

    let more = cancellationArr.slice(2);
    let terms = cancellationArr.map((term, index) => (
      <li key={index} className="list__item">
        {`-  ${term}`}
      </li>
    ));

    return (
      <div className="cancellation section">
        <div className="section--title">Cancellations</div>
        <div className="cancellation__first--line">{cancellationArr[0]}</div>
        <div className="cancellation__second--line">{cancellationArr[1]}</div>

        {this.state.isMoreClicked ? (
          <div>
            <ol>{more}</ol>
            <div>
              <a className="toggle-more">Get details</a>
            </div>
            <div>
              <a className="toggle-more" onClick={this.handleClickMore}>
                Hide policies
              </a>
            </div>
          </div>
        ) : (
          <a className="toggle-more" onClick={this.handleClickMore}>
            Read more about the policy{' '}
            <FontAwesome name="angle-down" size="lg" className="awesome" />
          </a>
        )}
      </div>
    );
  }
}

export default Cancellation;

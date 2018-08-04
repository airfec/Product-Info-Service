import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
// import Contact from './Contact.js';
import Modal from 'react-modal';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
      contactClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleContactPopup = this.toggleContactPopup.bind(this);
  }

  handleClick() {
    this.setState({ more: !this.state.more });
  }

  toggleContactPopup() {
    this.setState({
      contactClicked: !this.state.contactClicked
    });
  }

  renderContact() {
    return (
      // <div className="contact">
      //   <div className="contact__inner">
      <div>
        <i
          className="fa fa-times"
          aria-hidden="true"
          size="lg"
          onClick={this.toggleContactPopup}
        />
        <div className="contact__buttons">
          <div className="contact-single-button">
            <button className="fa fa-facebook-f contacts__button">
              <span>{'    '}</span>
              {'  '}Continue with Facebook
            </button>
          </div>
          <div className="contact-single-button">
            <button className="fa fa-google contacts__button">
              {'  '}Continue with Google
            </button>
          </div>
          {/* <div className="contact__line __left"> </div>
          <span className="contact__or">or</span>
          <div className="contact__line __right"> </div> */}
          <div className="contact-single-button">
            <button className="fa fa-envelope-o contacts__button">
              {'  '}Sign up with Email
            </button>
          </div>
          <div className="contact__line--whole"> </div>
          <div className="contact__already">
            <span>Already have an Airbnb account?{'    '}</span>
            <a className="toggle-more">Log in</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="details-section section">
        <div className="section-wrapper">
          {this.state.more ? (
            <div>
              <p>{this.props.room.short_description}</p>
              <p>{this.props.room.main_description}</p>
              <a onClick={this.handleClick} className="toggle-more">
                Hide <FontAwesome name="angle-up" size="lg" />
              </a>
            </div>
          ) : (
            <div>
              <p className="details-text">
                {this.props.room.short_description}
              </p>
              <div>
                <a
                  onClick={this.handleClick}
                  className="toggle-more details-toggle"
                >
                  Read more about the space{' '}
                  <FontAwesome name="angle-down" size="lg" />
                </a>
              </div>
            </div>
          )}
          <div className="toggle-more contact-host-link">
            <a onClick={this.toggleContactPopup}>Contact host</a>
          </div>

          {this.state.contactClicked ? (
            <Modal
              isOpen={this.state.contactClicked}
              onRequestClose={() => this.toggleContactPopup()}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(96,96,96, 0.75)'
                  // border: none
                },
                content: {
                  position: 'absolute',
                  // top: '40px',
                  left: '70px',
                  // right: '40px',
                  // bottom: '40px',
                  width: '40%',
                  height: '310px',
                  'min-width': '500px',
                  // border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  fontFamily: 'Helvetica'
                }
              }}
            >
              <div>{this.renderContact()}</div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;

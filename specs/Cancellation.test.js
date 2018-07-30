import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// import Applet from './../client/src/components/Cancellations/Cancellation.js';
import Cancellation from './../client/src/components/Cancellations/Cancellation.js';
// const Cancellation = require('../client/src/components/Cancellations/Cancellation.js');

// describe('<Cancellation />', () => {
//   it('should render', () => {
//     const Wrapper = Enzyme.mount(<Cancellation />);
//     expect(Wrapper);
//   });
// });

let wrapper = {};

beforeEach(() => {
  wrapper = Enzyme.shallow(<Cancellation />);
});

describe('Cancellation', function() {
  it('should render', () => {
    // expect(wrapper.contains(<Cancellation />)).toBe(true);
    expect(Wrapper);
  });
});

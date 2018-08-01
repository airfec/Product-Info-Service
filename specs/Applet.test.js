import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import 'isomorphic-fetch';

Enzyme.configure({ adapter: new Adapter() });

import Applet from '../client/src/components/Applet/index.js';
import Summary from '../client/src/components/Summary/Summary.js';
import Highlights from '../client/src/components/Highlights/Highlights.js';
import Details from '../client/src/components/Details/Details.js';
import Amenities from '../client/src/components/Amenities/Amenities.js';
import Sleeping from '../client/src/components/Sleeping Arrangments/Sleeping.js';
import Rules from '../client/src/components/Rules/Rules.js';
import Cancellation from '../client/src/components/Cancellations/Cancellation.js';

let wrapper = {};
let instance;
let getDataSpy;
let app;
beforeEach(() => {
  getDataSpy = jest.spyOn(Applet.prototype, 'getData');
  app = Enzyme.mount(<Applet />);
});

describe('Applet', function() {
  it('should render 1 <Qpplet /> component', () => {
    // expect(wrapper.contains(<Summary />)).toBe(true);
    const component = shallow(<Applet />);
    // console.log(app.instance());
    expect(component).toHaveLength(1);
  });

  it('should contain Summary', () => {
    expect(
      app.contains(
        <Summary className="summary section" room={app.instance().state.room} />
      )
    ).toBe(true);
  });

  it('should contain Highlights', () => {
    expect(
      app.contains(
        <Highlights
          className="highlights section"
          highlights={app.instance().state.room.highlights}
        />
      )
    ).toBe(true);
  });

  it('should contain Details', () => {
    expect(app.contains(<Details room={app.instance().state.room} />)).toBe(
      true
    );
  });

  it('should contain Amenities', () => {
    expect(
      app.contains(
        <Amenities amenities={app.instance().state.room.amenities} />
      )
    ).toBe(true);
  });

  it('should contain Sleeping', () => {
    expect(app.contains(<Sleeping room={app.instance().state.room} />)).toBe(
      true
    );
  });
  it('should contain Rules', () => {
    expect(app.contains(<Rules room={app.instance().state.room} />)).toBe(true);
  });
  it('should contain Cancellation', () => {
    expect(
      app.contains(<Cancellation room={app.instance().state.room} />)
    ).toBe(true);
  });
});

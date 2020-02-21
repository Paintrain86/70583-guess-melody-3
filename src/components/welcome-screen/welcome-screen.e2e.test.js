import React from 'react';
import {shallow} from 'enzyme';
import Welcome from './welcome-screen.jsx';

import {settings} from '../../mocks/app-test-settings.js';

describe(`Welcome`, () => {
  it(`Button should be clickable!`, () => {
    const onStartClick = jest.fn();

    const app = shallow(<Welcome
      {...settings}
      onStartClick={onStartClick}
    />);

    const btn = app.find(`button`);

    btn.simulate(`click`);
    expect(onStartClick).toHaveBeenCalledTimes(1);
  });
});

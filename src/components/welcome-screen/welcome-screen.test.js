import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

import {settings} from '../../mocks/app-test-settings.js';

describe(`WelcomeScreen`, () => {
  it(`Should be rendered correctly`, () => {
    const onStartClick = jest.fn();

    const markup = renderer
      .create(<WelcomeScreen
        {...settings}
        onStartClick={onStartClick}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

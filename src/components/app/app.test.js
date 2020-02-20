import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

import {appParams} from '../../mocks/app-test-settings.js';

describe(`App`, () => {
  it(`Should be rendered correctly`, () => {

    const markup = renderer
      .create(<App
        params={appParams}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

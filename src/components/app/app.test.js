import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`App`, () => {
  it(`Should be rendered correctly`, () => {
    const testSettings = {
      welcome: {
        luckText: `Тестовый текст на удачу`,
        gameTime: 50,
        mistakesCount: 2
      }
    };

    const markup = renderer
      .create(<App
        params={testSettings}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

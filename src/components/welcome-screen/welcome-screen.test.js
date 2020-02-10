import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe(`WelcomeScreen`, () => {
  it(`Should be rendered correctly`, () => {
    const testSettings = {
      luckText: `Тестовый текст на удачу`,
      gameTime: 50,
      mistakesCount: 2
    };

    const markup = renderer
      .create(<WelcomeScreen {...testSettings}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

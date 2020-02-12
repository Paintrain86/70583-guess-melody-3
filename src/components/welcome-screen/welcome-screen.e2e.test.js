import React from 'react';
import {shallow} from 'enzyme';
import Welcome from './welcome-screen.jsx';

describe(`Welcome`, () => {
  it(`Button should be clickable!`, () => {
    const testSettings = {
      luckText: `Тестовый текст на удачу`,
      gameTime: 50,
      mistakesCount: 2,
      onStartBtnClick: jest.fn()
    };

    const app = shallow(<Welcome {...testSettings}/>);

    const btn = app.find(`button`);

    btn.simulate(`click`);
    expect(testSettings.onStartBtnClick).toHaveBeenCalledTimes(1);
  });
});

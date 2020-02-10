import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

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

import React from 'react';
import {shallow} from 'enzyme';
import GuessGenre from './guess-genre.jsx';

import {questions} from '../../mocks/app-test-settings.js';

describe(`GuessGenre`, () => {
  it(`Should prevent default form submit`, () => {
    const onAnswer = jest.fn();
    const genre = shallow(<GuessGenre
      question={questions[0]}
      onAnswer={onAnswer}
    />);

    const form = genre.find(`form`);
    const preventSubmit = jest.fn();

    form.simulate(`submit`, {
      preventDefault: preventSubmit,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(preventSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Should execute callback with correct data`, () => {
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [false, true];

    const genre = shallow(<GuessGenre
      onAnswer={onAnswer}
      question={questions[0]}
    />);

    const form = genre.find(`form`);
    const inputTwo = genre.find(`input`).at(1);

    inputTwo.simulate(`change`, {
      target: {
        checked: true
      }
    });
    form.simulate(`submit`, {
      preventDefault: () => {}
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(questions[0]);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

    expect(
        genre.find(`input`).map((it) => it.prop(`checked`))
    ).toEqual(userAnswer);
  });
});

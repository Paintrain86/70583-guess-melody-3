import React from 'react';
import {shallow} from 'enzyme';
import GuessArtist from './guess-artist.jsx';

import {questions} from '../../mocks/app-test-settings.js';

describe(`GuessArtist`, () => {
  it(`Should send correct answer, when changing input`, () => {
    const onAnswer = jest.fn();

    const artist = shallow(<GuessArtist
      question={questions[1]}
      onAnswer={onAnswer}
    />);

    const checkingValue = questions[1].answers[0].artist;
    const input = artist.find(`.artist__input[value="${checkingValue}"]`);

    input.simulate(`change`, {
      preventDefault: () => {}
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith(questions[1], checkingValue);
  });
});

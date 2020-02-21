import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenre from './guess-genre.jsx';

import {questions} from '../../mocks/app-test-settings.js';

describe(`GuessGenre`, () => {
  it(`Should be rendered correctly`, () => {

    const markup = renderer
      .create(<GuessGenre
        question={questions[0]}
        onAnswer={jest.fn()}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

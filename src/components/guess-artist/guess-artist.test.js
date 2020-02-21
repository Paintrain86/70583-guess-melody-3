import React from 'react';
import renderer from 'react-test-renderer';
import GuessArtist from './guess-artist.jsx';

import {questions} from '../../mocks/app-test-settings.js';

describe(`GuessArtist`, () => {
  it(`Should be rendered correctly`, () => {

    const markup = renderer
      .create(<GuessArtist
        question={questions[1]}
        onAnswer={jest.fn()}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});

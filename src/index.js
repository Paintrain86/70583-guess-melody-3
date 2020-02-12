import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import settings from './mocks/settings.js';
import questions from './mocks/questions.js';

const params = {
  gameSettings: settings,
  gameQuestions: questions
};

const container = document.querySelector(`#root`);

ReactDOM.render(
    <App
      params={params}
    />,
    container
);

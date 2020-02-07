import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const params = {
  startParams: {
    luckText: `Удаче тебе, парень`,
    playTime: 310,
    mistakes: 4
  }
};

const container = document.querySelector(`#root`);

ReactDOM.render(
    <App
      params={params}
    />,
    container
);

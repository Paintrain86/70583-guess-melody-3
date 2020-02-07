import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const params = {
  welcome: {
    luckText: `Удачи тебе, парень`,
    gameTime: 310,
    mistakesCount: 4
  }
};

const container = document.querySelector(`#root`);

ReactDOM.render(
    <App
      params={params}
    />,
    container
);

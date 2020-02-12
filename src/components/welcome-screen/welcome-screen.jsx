import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = (props) => {
  const {
    luckText,
    gameTime,
    mistakesCount,
    onStartBtnClick = () => {}
  } = props;

  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <button className="welcome__button" onClick={onStartBtnClick}>
        <span className="visually-hidden">Начать игру</span>
      </button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы за {_getSecondsToMinutes(gameTime)}.</li>
        <li>Можно допустить {mistakesCount} ошибки.</li>
      </ul>
      <p className="welcome__text">{luckText}</p>
    </section>
  );

  function _getSecondsToMinutes(secondsCount) {
    if (typeof secondsCount !== `number`) {
      return 0;
    }

    const minutesDivider = 60;
    const minutesCount = Math.floor(secondsCount / minutesDivider);
    const restSecondsCount = secondsCount % minutesDivider;

    return `${(minutesCount > 0) ? `${minutesCount} минут` : ``} ${(restSecondsCount > 0) ? ` ${restSecondsCount} секунд` : ``}`;
  }
};

WelcomeScreen.propTypes = {
  luckText: PropTypes.string.isRequired,
  gameTime: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onStartBtnClick: PropTypes.func
};

export default WelcomeScreen;

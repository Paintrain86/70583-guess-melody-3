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
    <>
      <ul>
        <li><strong>Текст удачи:</strong> {luckText}</li>
        <li><strong>Время на прохождение:</strong> {_getSecondsToMinutes(gameTime)}</li>
        <li><strong>Максимальное кол-во ошибок:</strong> {mistakesCount}</li>
      </ul>

      <button onClick={onStartBtnClick}>Погнали</button>
    </>
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

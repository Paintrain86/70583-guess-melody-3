import React from 'react';
import PropTypes from 'prop-types';

class Welcome extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _formatSeconds(seconds) {
    if (typeof seconds !== `number`) {
      return 0;
    }

    const minutes = Math.floor(seconds / 60);
    const restSeconds = seconds - minutes * 60;

    return `${minutes} минут${(restSeconds > 0) ? ` ${restSeconds} секунд` : ``}`;
  }

  render() {
    const {
      luckText,
      playTime,
      mistakes,
      onStartBtnClick = () => {}
    } = this.props;

    return (
      <>
        <ul>
          <li><strong>Текст удачи:</strong> {luckText}</li>
          <li><strong>Время на прохождение:</strong> {this._formatSeconds(playTime)}</li>
          <li><strong>Максимальное кол-во ошибок:</strong> {mistakes}</li>
        </ul>

        <button onClick={onStartBtnClick}>Погнали</button>
      </>
    );
  }
}

Welcome.propTypes = {
  luckText: PropTypes.string.isRequired,
  playTime: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onStartBtnClick: PropTypes.func
};

export default Welcome;

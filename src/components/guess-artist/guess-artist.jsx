import React from 'react';
import PropTypes from 'prop-types';

const GuessArtist = (props) => {
  const {
    song,
    answers
  } = props;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={song.src}></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((it) => {
            const key = it.artist.toLowerCase().replace(` `, ``);

            return (
              <div className="artist" key={key}>
                <input className="artist__input visually-hidden" type="radio" name="answer" value={it.artist} id={key} />
                <label className="artist__name" htmlFor={key}>
                  <img className="artist__picture" src={it.picture} alt="Пелагея" />
                  {it.artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    </section>
  );
};

const checkTypeIsArtist = (props, propName, componentName) => {
  return (props[propName] === `artist`)
    ? null
    : new Error(
        `В компонент ${componentName} передано неверное значение свойства ${propName} - "${props[propName]}". Оно должно быть равно "artist"`
    );
};

GuessArtist.propTypes = {
  type: checkTypeIsArtist,
  song: PropTypes.exact({
    src: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  }),
  answers: PropTypes.arrayOf(PropTypes.exact({
    picture: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  })).isRequired
};

export default GuessArtist;

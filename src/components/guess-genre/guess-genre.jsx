import React from 'react';
import PropTypes from 'prop-types';

class GuessGenre extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: this.props.question.answers.map(() => false)
    };

    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.props.question, this.state.answers);
  }

  render() {
    const {
      question: {genre},
      question: {answers}
    } = this.props;

    const curAnswers = this.state.answers;


    return (
      <section className="game game--genre">
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
          <h2 className="game__title">Выберите {(genre.displayName) ? genre.displayName : genre.name} треки</h2>
          <form className="game__tracks">
            {answers.map((it, i) => {
              return (
                <div className="track" key={it.id}>
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio src={it.src}></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer"
                      value={it.genre}
                      id={`answer-${it.id}`}
                      checked={this.state.answers[i]}
                      onChange={(evt) => {
                        evt.preventDefault();
                        this.setState({
                          answers: [...curAnswers.slice(0, i), evt.target.checked, ...curAnswers.slice(i + 1)]
                        });
                      }}
                    />
                    <label className="game__check" htmlFor={`answer-${it.id}`}>Отметить</label>
                  </div>
                </div>
              );
            })}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

const checkTypeIsGenre = (props, propName, componentName) => {
  return (props[propName] === `genre`)
    ? null
    : new Error(
        `В компонент ${componentName} передано неверное значение свойства ${propName} - "${props[propName]}". Оно должно быть равно "genre"`
    );
};

GuessGenre.propTypes = {
  question: PropTypes.shape({
    type: checkTypeIsGenre,
    genre: PropTypes.exact({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string
    }),
    answers: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    }))
  }),
  onAnswer: PropTypes.func.isRequired
};

export default GuessGenre;

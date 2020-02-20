import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtist from '../guess-artist/guess-artist.jsx';
import GuessGenre from '../guess-genre/guess-genre.jsx';

const QuestionType = {
  GENRE: `genre`,
  ARTIST: `artist`
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      curQuestion: -1
    };

    this._onStartBtnClick = this._onStartBtnClick.bind(this);
    this._onUserAnswer = this._onUserAnswer.bind(this);
  }

  _getScreen() {
    const {
      params: {gameSettings},
      params: {gameQuestions}
    } = this.props;

    const question = gameQuestions[this.state.curQuestion];

    if (this.state.curQuestion === -1 || this.state.curQuestion >= gameQuestions.length) {
      return <WelcomeScreen onStartClick={this._onStartBtnClick} {...gameSettings} />;
    }

    if (question) {
      switch (question.type) {
        case QuestionType.GENRE:
          return <GuessGenre onAnswer={this._onUserAnswer} question={question} />;
        case QuestionType.ARTIST:
          return <GuessArtist onAnswer={this._onUserAnswer} question={question} />;
      }
    }

    return null;
  }

  _onUserAnswer() {
    this.setState((prevState) => ({
      curQuestion: prevState.curQuestion + 1
    }));
  }

  _onStartBtnClick() {
    this.setState({
      curQuestion: 0
    });
  }

  render() {
    const {
      params: {gameQuestions}
    } = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._getScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <GuessArtist onAnswer={this._onUserAnswer} question={gameQuestions[1]} />
          </Route>
          <Route exact path="/dev-genre">
            <GuessGenre onAnswer={this._onUserAnswer} question={gameQuestions[0]} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  params: PropTypes.shape({
    gameSettings: PropTypes.shape({
      luckText: PropTypes.string.isRequired,
      gameTime: PropTypes.number.isRequired,
      mistakesCount: PropTypes.number.isRequired
    }),
    gameQuestions: PropTypes.array.isRequired
  })
};

export default App;

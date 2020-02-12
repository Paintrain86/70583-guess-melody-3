import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtist from '../guess-artist/guess-artist.jsx';
import GuessGenre from '../guess-genre/guess-genre.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      params
    } = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen {...params.welcome} />
          </Route>
          <Route exact path="/dev-artist">
            <GuessArtist />
          </Route>
          <Route exact path="/dev-genre">
            <GuessGenre />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  params: PropTypes.shape({
    welcome: PropTypes.shape({
      luckText: PropTypes.string.isRequired,
      gameTime: PropTypes.number.isRequired,
      mistakesCount: PropTypes.number.isRequired
    })
  })
};

export default App;

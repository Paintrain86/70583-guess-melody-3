import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      params
    } = this.props;

    return (
      <WelcomeScreen {...params.welcome} />
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

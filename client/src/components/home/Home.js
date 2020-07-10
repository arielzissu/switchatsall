import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { store as notifications } from 'react-notifications-component';

import {
  setUsername,
  setAuthenticationStatus,
  setRulesRead
} from '../../store/user/actions';

class Home extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('username')) {
      this.props.setUsername(localStorage.getItem('username'));
    }

    if (localStorage.getItem('read_rules') === true) {
      this.props.setRulesRead();
    }
  }

  onChange = e => {
    this.props.setUsername(e.target.value)
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.props.username.length > 3) {
      this.props.setAuthenticationStatus(true);
    } else {
      notifications.addNotification({
        message: 'נדרשים לפחות 3 תווים',
        type: 'danger',
        insert: 'top',
        container: 'top-center',
        dismiss: {
          duration: 3000
        }
      });
    }
  };

  render() {
    if (this.props.isAuthenticated && !this.props.isReadRules) {
      localStorage.setItem('username', this.props.username);
      return (
        <Redirect to="/terms" />
      );
    } else if (this.props.isAuthenticated && this.props.isReadRules) {
      localStorage.setItem('username', this.props.username);
      localStorage.setItem('read_rules', true);
      return (
        <Redirect to="/chat" />
      );
    }

    return (
      <div className="window-container home">
        <div className="window-background"></div>
        <div className="window-card">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="nickname">בחר שם:</label>
              <input
                id="nickname"
                placeholder="הקלד שם..."
                value={this.props.username}
                onChange={this.onChange}
              />
            </div>
  
            <div className="window-action">
              <button
                className="button button__primary"
                onClick={this.onSubmit}
              >
                חפש צאט
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  isAuthenticated: state.user.authenticated,
  isReadRules: state.user.read_rules
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(setUsername(username)),
  setAuthenticationStatus: isAuthenticated => dispatch(setAuthenticationStatus(isAuthenticated)),
  setRulesRead: () => dispatch(setRulesRead())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

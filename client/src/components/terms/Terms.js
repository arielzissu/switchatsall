import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { store as notifications } from 'react-notifications-component';

import { setRulesRead } from '../../store/user/actions';

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toChat: false,
      scrollBottom: false,
    };

    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    const scrollEvent = this.scrollRef;
    if (scrollEvent) {
      this.scrollRef.current.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {

  }

  onChange = e => {
    this.props.setRulesRead();
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.props.readRules === true) {
      this.setState({
        toChat: true
      });
      localStorage.setItem('read_rules', true);
    } else {
      notifications.addNotification({
        message: 'אשר שקראת את הכללים.',
        type: 'danger',
        insert: 'top',
        container: 'top-center',
        dismiss: {
          duration: 3000
        }
      });
    }
  };

  handleScrollButton = e => {
    e.preventDefault();

    this.scrollRef.current.scrollBy(0, 32)
  };

  handleScroll = e => {
    // const scrollTop = e.srcElement.body.scrollTop;
    // const scrollHeight = e.srcElement.body.scrollHeight;
    const height = e.srcElement.scrollHeight;
    const offsetHeight = e.srcElement.offsetHeight;
    const scrollTop = e.srcElement.scrollTop;

    if (height - offsetHeight === scrollTop) {
      this.setState({
        scrollBottom: true
      });
    } else {
      this.setState({
        scrollBottom: false
      });
    }
  };

  render() {
    if (!this.props.authenticated) {
      return (
        <Redirect to="/" />
      );
    }

    if (this.state.toChat) {
      return (
        <Redirect to="/chat" />
      );
    }

    return (
      <div className="window-container terms">
        <div className="window-background"></div>
        <div className="window-card">
          <h3 className="window-title">אנא אשר שקראת את התקנון...</h3>
          <div className="window-scroller">
            <div className="window-scroller-container" ref={this.scrollRef}>
              <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            {!this.state.scrollBottom ? (
              <button className="window-scroller-button" onClick={this.handleScrollButton}><div className="rectangle rectangle__white"></div></button>
            ) : null}
          </div>
          <div className="window-checkbox">
            <input id="accept-terms" type="checkbox" checked={this.props.isRulesRead} onChange={this.onChange} />
            <label htmlFor="accept-terms">אני מאשר שקראתי את התקנון<span>*</span></label>
          </div>
          <div className="window-action">
            <button
              className="button button__primary"
              onClick={this.onSubmit}
            >
              המשך
            </button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  readRules: state.user.read_rules
});

const mapDispatchToProps = dispatch => ({
  setRulesRead: () => dispatch(setRulesRead())
});

export default connect(mapStateToProps, mapDispatchToProps)(Terms);

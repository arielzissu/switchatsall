import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import ReactNotification from 'react-notifications-component';

import 'normalize.css';
import './App.scss';
import 'react-notifications-component/dist/theme.css';

import Ads from './components/ads/Ads';
import Chat from './components/chat/Chat';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Terms from './components/terms/Terms';

const RouteMatchChat = ({ children }) => {
  let isMatchChat = useRouteMatch('/chat');
  return children(isMatchChat);
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <ReactNotification />
        <main>
          <div className="main-background"></div>
          <div className="main-container">
            <div className="window">
              <div className="window-wrapper">
                <RouteMatchChat>
                  {match => {
                    return (
                      <div className={match ? 'brand brand__hidden' : 'brand'}>
                        <h1 className="brand-title">Switchats</h1>
					              <p className="brand-text">הצ’אטים שיעבירו לכם את הזמן</p>
                      </div>
                    );
                  }}
                </RouteMatchChat>

                <Switch>
                  <Route path="/ads">
                    <Ads />
                  </Route>
                  <Route path="/chat">
                    <Chat />
                  </Route>
                  <Route path="/terms">
                    <Terms />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>

            <RouteMatchChat>
              {match => {
                return <Footer hidden={match} />
              }}
            </RouteMatchChat>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;

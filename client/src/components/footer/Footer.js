import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.hidden ? 'footer__hidden' : null}>
        <nav className="footer-nav">
          <a className="footer-nav-item" href="/">תקנון</a>
          <a className="footer-nav-item" href="/">דווח</a>
          <a className="footer-nav-item" href="/">צור קשר</a>
        </nav>
        <p className="footer-copyright">נבנה ע”י © Grimix</p>
      </footer>
    );
  }
}

export default Footer;

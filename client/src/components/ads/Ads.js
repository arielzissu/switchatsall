import React from 'react';
import { Link } from 'react-router-dom';

const Ads = props => {
  return (
    <div className="window-container ads">
      <div className="ads-container">
        <div className="ads-item">
          <h4>פרסומת 1</h4>
        </div>

        <div className="ads-item">
          <h4>פרסומת 2</h4>
        </div>

        <div className="ads-item">
          <h4>פרסומת 3</h4>
        </div>
      </div>

      <div className="window-action">
        <Link to="/chat" className="button button__primary">
          התחל שיחה חדשה
        </Link>
        {/* <button
          className="button button__primary"
          onClick={onSubmit}
          >
            התחל שיחה חדשה
          </button> */}
      </div>
    </div>
  );
};

export default Ads;

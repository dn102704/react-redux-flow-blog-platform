import React from 'react';
import Responsive from 'components/common/Responsive';
import BackgroundColor from 'components/common/BackgroundColor';
import './HomeTemplate.scss';

const HomeTemplate = ({ form }) => {
  return (
    <div className="home-template">
      <Responsive className="block">
        <div className="left-text">
          <div>
            <h1>Where can our developer<br />write a article</h1>
            <div className="description">
              <p>Ah... from here</p>
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="black-box">
            <h2>Login or Signup</h2>
            {form}
          </div>
          <div className="register-button">
            Now get started
          </div>
        </div>
      </Responsive>
    </div>
  );
};

export default HomeTemplate;

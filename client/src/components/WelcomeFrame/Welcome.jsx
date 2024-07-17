import React from 'react';
import './welcome.css';
import Vector from '../../assets/Vector.svg';
import Closeimg from '../../assets/Close.svg';

function Welcome() {
  return (
    <div className='welcome-main'>
      <div className='welcome-content'>
        <h3 className='welcome-title'>Welcome back, John Doe</h3>
        <p className='welcome-message'>
          The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.
        </p>
        <a className='welcome-link' href="#">Look here for more information</a>
      </div>
      <div className='welcome-img'>
        <img src={Vector} alt="Welcome Illustration" />
      </div>
      <div className='close-icon'>
        <img src={Closeimg} alt="Close" />
      </div>
    </div>
  );
}

export default Welcome;

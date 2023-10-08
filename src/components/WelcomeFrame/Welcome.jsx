import React from 'react';
import './welcome.css';
import Vector from '../../assets/Vector.svg'
import Closeimg from '../../assets/Close.svg'


function Welcome() {
  return (
    <div className='Welcome-main'>
      <div>
        <h3 className='welocome-title'>Welcome back, John Doe</h3>
        <div className='welcome-content'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy. <br />
          <a className='welcome-link' href="Look here for more information">Look here for more information</a>
        </div>
      </div>
      <div className='welcome-img'>
        <img src={Vector} alt="" />
      </div>
      <div className='close-icon'>
        <img src={Closeimg} alt="" />
      </div>  
    </div>
  )
}

export default Welcome

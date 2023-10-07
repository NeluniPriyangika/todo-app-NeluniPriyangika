import React from 'react';
import './welcome.css';


function Welcome() {
  return (
    <div className='Welcome-main'>
      <h3 className='welocome-title'>Welcome back, John Doe</h3>
      <div className='welcome-content'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy. <br />
        <a className='welcome-link' href="">Look here for more information</a>
      </div>
    </div>
  )
}

export default Welcome

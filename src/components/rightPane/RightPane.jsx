import React from 'react'
import './rightPane.css'
import Notifications from '../../assets/Notifications.svg'
import Profile from '../../assets/Profile.svg'
import ChevronDown from '../../assets/Chevron-down.svg'
import Welcome from '../WelcomeFrame/Welcome'

function RightPane() {
  return (
    <div className='main-Right'>
        <div className='Header-Navigation'>
          <div>
              <h4 className='main-dashboard-title'>Dashboard1</h4>
          </div>
          <img className='bell-icon' src={Notifications} alt="" /> 
          <div className='frame68'>
                <img className="profile-icon" src={Profile} alt="" />
                <img className='down-icon' src={ChevronDown} alt="" />
          </div> 
        </div>
        <div className='devider-line'/>
        <div className='welcomeframe-div'>
          <Welcome/>
        </div>
  ` </div>   
  )
}

export default RightPane

import React from 'react';
import './rightPane.css';
import Notifications from '../../assets/Notifications.svg';
import Profile from '../../assets/Profile.svg';
import ChevronDown from '../../assets/Chevron-down.svg';
import Welcome from '../WelcomeFrame/Welcome';
import Tasks from '../Tasks/Tasks';
import Activity from '../ActivityFeed/Activity';
import Chart from '../chart/Chart';

function RightPane() {
  return (
    <div className='main-Right'>
      <div className='Header-Navigation'>
        <h4 className='main-dashboard-title'>Dashboard</h4>
        <div className='notification-profile'>
          <img className='bell-icon' src={Notifications} alt="Notifications" />
          <div className='frame68'>
            <img className='profile-icon' src={Profile} alt="Profile" />
            <img className='down-icon' src={ChevronDown} alt="Dropdown" />
          </div>
        </div>
      </div>
      <div className='divider-line' />
      <div className='welcomeframe-div'>
        <Welcome />
      </div>
      <div className='rightPane-bottom-container'>
        <div className='task-comp'>
          <Tasks />
        </div>
        <div className='act-TPri-container'>
          <div className='actFeed-comp'>
            <Activity />
          </div>
          <div className='taskPri-comp'>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPane;

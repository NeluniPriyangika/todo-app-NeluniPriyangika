import React from 'react';
import './sidebarNav.css';
import Dashboard from '../../assets/Dashboard.svg';

function SidebarNav() {
  return (
    <div className='Sidebar-Navigation'>
      <div className='Sidebar-TitleBox'>
        <div className='metjip-logo-white-1'>
          {/* Logo can be added here */}
        </div>
        <div className='Sidebar-Title'>
          Acmy Solution
        </div>
      </div>
      <div className='dashboard-frame61'>
        <div className='frame55'>
          <div className='dashboard-icon'>
            <img src={Dashboard} alt="Dashboard" />
          </div>
          <div className='large-text'>
            Dashboard
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;

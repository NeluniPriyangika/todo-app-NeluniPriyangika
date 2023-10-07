import React from 'react';
import './home.css';
import SidebarNavigation from '../../components/SidebarNavigation/SidebarNav';
import RightPane from '../../components/RightPane/RightPane';





function Home() {
  return (
    <div className='home-Main'>
      <div className='sidebarLeft'><SidebarNavigation/></div>
      <div className='page-Right'><RightPane/></div> 
    </div>
  )
}

export default Home

import React from 'react';
import './home.css';
import SidebarNavigation from '../../components/sidebarNavigation/SidebarNav';
import HeaderNavigation from '../../components/headerNavigation/HeaderNav';



function Home() {
  return (
    <div className='home-Main'>
      <div className='sidebarLeft'><SidebarNavigation/></div>
      <div className='page-Right'><HeaderNavigation/></div>
    </div>
  )
}

export default Home

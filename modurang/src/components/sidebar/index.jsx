import React from 'react'
import './style.css'
import Logo from '../../assets/images/Logo.svg'

const index = () => {
  return (
    <div className='sidebar'>
        <div className='logo'>
          <img src={Logo} alt='Logo'></img>
        </div>
        <div className='menu'>
          <div className='sidebar-button'>홈</div>
          <div className='sidebar-button'>달력</div>
          <div className='sidebar-button'>내 동아리</div>
          <div className='sidebar-button'>프로필</div>
        </div>
    </div>
  )
}

export default index
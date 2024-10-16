import React from 'react'
import './style.css'
import Logo from '../../assets/images/Logo.svg'
import {Link} from 'react-router-dom'

const index = () => {
  return (
    <div className='sidebar'>
        <div className='logo'>
          <img src={Logo} alt='Logo'></img>
        </div>
        <div className='menu'>
          <Link to='/home' className='sidebar-button'>홈</Link>
          <Link to='/calender' className='sidebar-button'>달력</Link>
          <div className='sidebar-button'>내 동아리</div>
          <Link to='/profile' className='sidebar-button'>프로필</Link>
        </div>
    </div>
  )
}

export default index
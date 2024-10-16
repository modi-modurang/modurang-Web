import React from 'react'
import './style.css'
import logo from '../../assets/logo/logo1.svg'

const Sidebar = () => {
  return (
    
    <div className='sidebar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='button-container'>
            <p className='button'>홈</p>
            <p className='button'>달력</p>
            <p className='button'>내 동아리</p>
            <p className='button' style={{marginBottom:"20px"}}>프로필</p>
        </div>
    </div>
    
  )
}

export default Sidebar
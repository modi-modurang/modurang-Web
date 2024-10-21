import React from 'react';
import './style.css';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/index'
import alim from '../../assets/images/공지사항.svg'
import project from '../../assets/images/과제.svg'
import scedule from '../../assets/images/일정.svg'
import member from '../../assets/images/부원목록.svg'
import selectalim from '../../assets/images/공지사항(선택).svg'
import selectproject from '../../assets/images/과제(선택).svg'
import selectscedule from '../../assets/images/일정(선택).svg'
import selectmember from '../../assets/images/부원목록(선택).svg'

const Index = () => {
  const [selected, setSelected] = useState()
  return (
    <div className='main'>
        <Sidebar/>
        <div className='container'>
          <div className='button-menu'>
              <div className='button' onClick={()=>{setSelected("alim")}}>
                <img src={selected === 'alim' ? selectalim : alim} alt='공지사항'/>
                <p>공지사항</p>
              </div>
              <div className='button' onClick={()=>{setSelected("project")}}>
                <img src={selected === 'project' ? selectproject : project} alt='과제'/>
                <p>과제현황</p>
              </div>
              <div className='button' onClick={()=>{setSelected("scedule")}}>
                <img src={selected === 'scedule' ? selectscedule : scedule} alt='일정'/>
                <p>일정</p>
              </div>
              <div className='button' onClick={()=>{setSelected("member")}}>
                <img src={selected === 'member' ? selectmember : member} alt='부원목록'/>
                <p>부원목록</p>
              </div>
          </div>
          <div className='content'>

          </div>
          <div className='calander'>

          </div>
          <div className='content2'>

          </div>
        </div>
    </div>
  )
}

export default Index
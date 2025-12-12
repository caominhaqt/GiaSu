import React from 'react'
import './Home.css'
import Task from '../Task/Task'
import {EditOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
const Home = () => {
  return (
    <div className='Home'>
      <div className='Title'>
        <p style={{fontSize: "30px"}}>Không Gian Lớp Học</p>
        <div className='AddItem'>
          <span style={{fontSize: "30px"}}>+</span>
        </div>
      </div>
      <div className='Content'>
        <Task></Task>
      </div>
      <div className='Menu'>
        <button className='Fix' style={{ fontSize: '30px' }}><EditOutlined/></button>
        <button className='HomePage'style={{ fontSize: '30px' }} ><HomeOutlined /></button>
        <button className='Acc'style={{ fontSize: '30px' }} ><UserOutlined /></button>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import './Status.css'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
const Status = () => {
    return (
        <div className='Status'>
            <div className='User'>
                <div className='Shortname'></div>
                <div className='User_Name'>
                    <div className='Gmail'>
                        <span style={{ fontSize: "28px", fontWeight: "bold" }}>@123</span>
                    </div>
                    <div className='Role'>
                        <span style={{ fontSize: "28px", fontWeight: "bold" }}>Phụ Huynh</span>
                    </div>
                </div>
            </div>
            <div className='Student_Status'>
                <div className='Status_Top'>
                    <div className='Number_student'>
                        <span style={{ fontSize: "20px" }}>Số học sinh</span>
                        <span style={{ fontSize: "28px", fontWeight: "bold" }}>1</span>
                    </div>
                    <div className='Number_lesson'>
                        <span style={{ fontSize: "20px" }}>Tổng số</span>
                        <span style={{ fontSize: "28px", fontWeight: "bold" }}>1</span>
                    </div>
                </div>
                <div className='Log_out'>
                    <button style={{ fontSize: "20px" }}>Đăng Xuất</button>
                </div>
            </div>

            <div className='Bar'>
                <HomeOutlined className='Home_page' style={{ fontSize: "30px" }}/>
                <UserOutlined className='user' style={{ fontSize: "30px" }}/>
            </div>
        </div>
    )
}

export default Status

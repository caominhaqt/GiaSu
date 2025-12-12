import React from 'react'
import './Account.css'
import { EditOutlined, HomeOutlined, UserOutlined, StarFilled, BookOutlined, TrophyOutlined,SolutionOutlined } from '@ant-design/icons';
const Account = () => {
    return (
        <div className='Account'>
            <div className='Teacher'>
                <div className='Teacher_Left'>
                    <div className='Short_Name'></div>
                    <div className='Name' style={{ fontSize: "28px", fontWeight: "bold" }}>Nguyễn Văn A</div>
                </div>
                <div className='Teacher_Right'>
                    <div className='Star'>
                        <div className='Star_Number'>
                            <StarFilled style={{ color: 'yellow' }} /> 
                            <span style={{fontSize: "20px"}}> 5.0 / 5</span>
                        </div>
                        <div className='Star_Letter'>
                            <span style={{fontSize: "14px"}}>Sao Đánh Giá</span>
                        </div>
                    </div>
                    <div className='Evaluate'>
                        <span style={{fontSize: "20px"}}>1</span>
                        <span style={{fontSize: "14px"}}>Bài Đánh Giá</span>
                    </div>
                    <div className='Teach'>
                        <span style={{fontSize: "20px"}}>1</span>
                        <span style={{fontSize: "14px"}}>Bài Đã Dạy</span>
                    </div>
                </div>
            </div>
            <div className='Buttons'>
                <button className='Change' style={{fontWeight: 700}}>Chỉnh Sửa</button>
                <button className='LogOut' style={{fontWeight: 700}}>Đăng Xuất</button>
            </div>
            <div className='Information'>
                <div className='Mon_Hoc'>
                    <UserOutlined style={{ fontSize: '24px' }}/>
                    <span style={{ fontSize: '24px',fontWeight:"bold" }}>Môn Học</span>
                </div>
                <div className='Hoc_Van'>
                    <BookOutlined style={{ fontSize: '24px' }}/>
                    <span style={{ fontSize: '24px',fontWeight:"bold" }}>Học Vấn</span>
                </div>
                <div className='Thanh_Tich'>
                    <TrophyOutlined style={{ fontSize: '24px' }}/>
                    <span style={{ fontSize: '24px',fontWeight:"bold" }}>Thành Tích</span>
                </div>
                <div className='Kinh_Nghiem'>
                    <SolutionOutlined style={{ fontSize: '24px' }}/>
                    <span style={{ fontSize: '24px',fontWeight:"bold" }}>Kinh Nghiệm</span>
                </div>
            </div>
            <div className='Menu'>
                <button className='Fix' style={{ fontSize: '30px' }}><EditOutlined /></button>
                <button className='HomePage' style={{ fontSize: '30px' }} ><HomeOutlined /></button>
                <button className='Acc' style={{ fontSize: '30px' }} ><UserOutlined /></button>
            </div>
        </div>
    )
}

export default Account

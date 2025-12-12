import React from 'react'
import './Task.css'
const Task = () => {
    return (
        <div className='Task'>
            <div className='ShortName'>
                <p style={{ fontSize: "30px" }}>PH</p>
            </div>
            <div className='Info'>
                <div className='Info_Left'>
                    <span style={{ fontWeight: "bold" }}>Mẹ Nam</span>
                    <span>Đánh Giá</span>
                </div>
                <div className='Info_Right'>
                    <div className='Date'>
                        6/12/2025
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Task

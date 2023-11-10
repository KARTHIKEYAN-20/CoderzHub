import React from 'react'
import Profile from '../../assets/following.png'
import { BiUpvote, BiMessageRoundedDetail } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import './Question.css'

const Question = () => {
    return (
        <div className='App_Question'>
            <div className="App_Question_logo">
                <img src={Profile} alt="Profile icon" />
            </div>
            <div className="App_Question_details">
                <div className="App_Question_name">
                    Kishoth
                </div>
                <h3>Quick Sort not working in c++</h3>
                <div className="App_Question_tags">
                    <span className='App_Questions_tag'>C++</span>
                    <span className='App_Questions_tag'>C</span>
                </div>
                <div className="App_Question_icons">
                    <div className="App_Question_icon">
                        <BiUpvote className='App_Question_i' />
                        <span>123</span>
                    </div>
                    <div className="App_Question_icon">
                        <FiEye className='App_Question_i' />
                        <span>1234</span>
                    </div>
                    <div className="App_Question_icon">
                        <BiMessageRoundedDetail className='App_Question_i' />
                        <span>10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
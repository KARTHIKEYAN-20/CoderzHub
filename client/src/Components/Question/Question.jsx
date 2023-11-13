import React from 'react'
import Profile from '../../assets/following.png'
import { BiUpvote, BiMessageRoundedDetail } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import './Question.css'

const Question = ({ question }) => {
    return (
        <div className='App_Question'>
            <div className="App_Question_logo">
                <img src={Profile} alt="Profile icon" />
            </div>
            <div className="App_Question_details">
                <div className="App_Question_name">
                    {question.userPosted}
                </div>
                <h3>{question.questionTitle}</h3>
                <div className="App_Question_tags">
                    {question.questionTags.map((tag, index) => (
                        <span key={index} className='App_Questions_tag'>{tag}</span>
                    ))}
                </div>
                <div className="App_Question_icons">
                    <div className="App_Question_icon">
                        <BiUpvote className='App_Question_i' />
                        <span>{question.upVote.length}</span>
                    </div>
                    <div className="App_Question_icon">
                        <FiEye className='App_Question_i' />
                        <span>1234</span>
                    </div>
                    <div className="App_Question_icon">
                        <BiMessageRoundedDetail className='App_Question_i' />
                        <span>{question.answers.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
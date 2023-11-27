import React from 'react'
import Profile from '../../assets/following.png'
import { BiUpvote, BiMessageRoundedDetail } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Question.css'
import { useDispatch, useSelector } from 'react-redux'
import { viewQuestion, voteQuestion } from '../../actions/question'

const Question = ({ question }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);

    const handleViews = (id) => {
        dispatch(viewQuestion(id, user.result._id));
    }

    const handleUpVote = (id) => {
        dispatch(voteQuestion(id, user.result._id));
    }

    return (
        <div className='App_Question'>
            <div className="App_Question_logo">
                <img src={Profile} alt="Profile icon" />
            </div>
            <div className="App_Question_details">
                <div className="App_Question_name">
                    {question.userPosted}
                </div>
                <Link to={`/question/${question._id}`}
                    key={question._id}
                    className="App_Question_Title"
                    onClick={() => handleViews(question._id)}>
                    <h3>{question.questionTitle}</h3>
                </Link>
                <div className="App_Question_tags">
                    {question.questionTags.map((tag, index) => (
                        <span key={index} className='App_Questions_tag'>{tag}</span>
                    ))}
                </div>
                <div className="App_Question_icons">
                    <div className="App_Question_icon">
                        <BiUpvote className='App_Question_i' onClick={() => handleUpVote(question._id)} />
                        <span>{question.upVote.length}</span>
                    </div>
                    <div className="App_Question_icon">
                        <FiEye className='App_Question_i' />
                        <span>{question.views.length}</span>
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
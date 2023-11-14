import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import Profile from '../../assets/following.png'
import { BiUpvote, BiDownvote, BiMessageRoundedDetail } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import './QuestionDetails.css'
import { postAnswer } from '../../actions/question'
import { useState } from 'react'

const QuestionDetails = () => {

    const { id } = useParams();
    const questionsList = useSelector(state => state.question);
    const user = useSelector(state => state.currentUser);
    const [Answer, setAnswer] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const filteredQuestions = questionsList?.data?.filter(question => question._id === id) || [];

    if (!filteredQuestions.length) {
        return <div>Loading...</div>;
    }

    const question = filteredQuestions[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === null) {
            alert('Login or SignUp to answer a question');
            navigate('/user');
        } else {
            if (Answer === '') {
                alert('Enter an answer to submit');
            } else {
                dispatch(postAnswer({ id, answerBody: Answer, userAnswered: user.result.name }));
                setAnswer('');
            }
        }
    }

    return (
        <div className='App_HomePage'>
            <div className="App_HomePage_Container">
                <LeftSideBar />
                <div className="App_questionDetails">
                    <div className="App_questionDetails_container">
                        <div className="App_questionDetails_info">
                            <div className="App_Question_logo">
                                <img src={Profile} alt="" />
                            </div>
                            <div className="App_Question_heading">
                                <h2>{question.questionTitle}</h2>
                                <div className="App_Question_icons">
                                    <div>{question.userPosted}</div>
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
                                <div className="App_Question_tags" style={{ margin: '8px 0px' }}>
                                    {
                                        question.questionTags.map((tag, index) => (
                                            <span className='App_Questions_tag' key={index}>{tag}</span>
                                        ))
                                    }
                                </div>
                                <p>{question.questionBody}</p>
                            </div>
                        </div>
                        <div className="App_questionDetails_Comment">
                            <div className="App_Comment_heading">
                                <BiMessageRoundedDetail style={{ fontSize: '25px' }} />
                                <h2>Answers</h2>
                                <h3>({question.answers.length})</h3>
                            </div>
                            <form onSubmit={(e) => handleSubmit(e)} className='App_Comment_form'>
                                <label htmlFor="commentInput">
                                    <textarea
                                        name="answer"
                                        id="answerBody"
                                        cols="30"
                                        rows="8"
                                        placeholder='Type your answer here...'
                                        value={Answer}
                                        onChange={(e) => setAnswer(e.target.value)}></textarea>
                                </label>
                                <input type="submit" value="Post Answer" className='app_reviewBtn' style={{ margin: '15px 20px' }} />
                            </form>
                        </div>
                        {question.answers && question.answers.length > 0 ? (
                            <>
                                {question.answers.map((answer, index) => (
                                    <div className="App_Comment_answers" key={index}>
                                        <div className="App_Comment_userInfo">
                                            <div className="App_Question_logo">
                                                <img src={Profile} alt="" />
                                            </div>
                                            <h3>{answer.userAnswered}</h3>
                                        </div>
                                        <p>{answer.answerBody}</p>
                                        <div className="App_Question_icons" style={{ marginLeft: '8px' }}>
                                            <div className="App_Question_icon">
                                                <BiUpvote className='App_Question_i' />
                                                <span>0</span>
                                            </div>
                                            <div className="App_Question_icon">
                                                <BiDownvote className='App_Question_i' />
                                                <span>0</span>
                                            </div>
                                            <div className="App_Question_icon">
                                                <BiMessageRoundedDetail className='App_Question_i' />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div>No answers available</div>
                        )}
                    </div>
                </div>
                <RightSideBar />
            </div>
        </div >
    )
}

export default QuestionDetails

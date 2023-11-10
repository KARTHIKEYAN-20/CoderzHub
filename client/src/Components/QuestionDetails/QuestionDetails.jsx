import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import Profile from '../../assets/following.png'
import { BiUpvote, BiDownvote, BiMessageRoundedDetail } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import './QuestionDetails.css'

const QuestionDetails = () => {
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
                                <h2>Quick sort is not working in C++</h2>
                                <div className="App_Question_icons">
                                    <div>Name</div>
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
                                <div className="App_Question_tags" style={{ margin: '8px 0px' }}>
                                    <span className='App_Questions_tag'>C++</span>
                                    <span className='App_Questions_tag'>C</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, doloremque provident nemo molestiae ipsum, sit ullam ipsam inventore, porro natus aut id quisquam possimus hic officia eos obcaecati quia?</p>
                            </div>
                        </div>
                        <div className="App_questionDetails_Comment">
                            <div className="App_Comment_heading">
                                <BiMessageRoundedDetail style={{ fontSize: '25px' }} />
                                <h2>Answers</h2>
                                <h3>(1)</h3>
                            </div>
                            <form action="" className='App_Comment_form'>
                                <label htmlFor="commentInput">
                                    <textarea name="answer" id="answerBody" cols="30" rows="8" placeholder='Type your answer here...'></textarea>
                                </label>
                                <input type="submit" value="Post Answer" className='app_reviewBtn' style={{ margin: '15px 20px' }} />
                            </form>
                        </div>
                        <div className="App_Comment_answers">
                            <div className="App_Comment_userInfo">
                                <div className="App_Question_logo">
                                    <img src={Profile} alt="" />
                                </div>
                                <h3>Kishoth</h3>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores corrupti dignissimos in doloremque earum. Vel eligendi dolore, cumque quia at est saepe, ipsa a quae itaque consequatur, fugiat laudantium tenetur.</p>
                            <div className="App_Question_icons" style={{ marginLeft: '8px' }}>
                                <div className="App_Question_icon">
                                    <BiUpvote className='App_Question_i' />
                                    <span>12</span>
                                </div>
                                <div className="App_Question_icon">
                                    <BiDownvote className='App_Question_i' />
                                    <span>1</span>
                                </div>
                                <div className="App_Question_icon">
                                    <BiMessageRoundedDetail className='App_Question_i' />
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSideBar />
            </div>
        </div >
    )
}

export default QuestionDetails

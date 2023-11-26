import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question'
import './AskQuestion.css'

const AskQuestion = () => {

    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [questionTags, setQuestionags] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.currentUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: user.result.name, userId: user.result._id }, navigate));
    }

    const handlePress = (e) => {
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + "\n");
        }
    }

    return (
        <div className='app_askquestion'>
            <div className="app_askquestion_container">
                <h2>Ask a public question</h2>
                <form onSubmit={handleSubmit}>
                    <div className="app_form_container">
                        <label htmlFor="askFormTitle">
                            <h4>Title</h4>
                            <p>Be specific and imagine your are asking a question to public</p>
                            <input
                                type="text"
                                id='questionTitle'
                                onChange={(e) => setQuestionTitle(e.target.value)} />
                        </label>
                        <label htmlFor="askQuestionBody">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea
                                name="questionBody"
                                id="questionBody"
                                cols="30"
                                rows="8"
                                onChange={(e) => setQuestionBody(e.target.value)}
                                onKeyPress={handlePress}>
                            </textarea>
                        </label>
                        <label htmlFor="askQuestionTags">
                            <h4>Tags</h4>
                            <p>Add upto 5 tags to describe what your question is about</p>
                            <input
                                type="text"
                                id='questionTitle'
                                placeholder='eg: (c java python)'
                                onChange={(e) => setQuestionags(e.target.value.split(" "))} />
                        </label>
                    </div>
                    <input type="submit" value='Review your question' className='app_reviewBtn' />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion

import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
    return (
        <div className='app_askquestion'>
            <div className="app_askquestion_container">
                <h2>Ask a public question</h2>
                <form action="">
                    <div className="app_form_container">
                        <label htmlFor="askFormTitle">
                            <h4>Title</h4>
                            <p>Be specific and imagine your are asking a question to public</p>
                            <input type="text" id='questionTitle' />
                        </label>
                        <label htmlFor="askQuestionBody">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="" id="questionBody" cols="30" rows="8"></textarea>
                        </label>
                        <label htmlFor="askQuestionTags">
                            <h4>Tags</h4>
                            <p>Add upto 5 tags to describe what your question is about</p>
                            <input type="text" id='questionTitle' />
                        </label>
                    </div>
                    <input type="submit" value='Review your question' className='app_reviewBtn' />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion

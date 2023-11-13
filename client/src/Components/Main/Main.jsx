import React from 'react'
import { useSelector } from 'react-redux'
import Question from '../Question/Question'
import './Main.css'

const Main = () => {

    const questionsList = useSelector(state => state.question);

    return (
        <div className='App_main'>
            <div className="App_main_header">
                <h2>Questions</h2>
                <button className='App_main_button'>Ask Question</button>
            </div>
            <div className="App_main_question">
                {questionsList.data &&
                    questionsList.data.map((question) => (
                        <Question key={question._id} question={question} />
                    ))}
            </div>

        </div>
    )
}

export default Main

import React from 'react'
import Question from '../Question/Question'
import './Main.css'

const Main = () => {
    return (
        <div className='App_main'>
            <div className="App_main_header">
                <h2>Questions</h2>
                <button className='App_main_button'>Ask Question</button>
            </div>
            <div className="App_main_question">
                <Question />
            </div>
        </div>
    )
}

export default Main

import React from 'react'
import { useSelector } from 'react-redux'
import Question from '../Question/Question'
import { Link } from 'react-router-dom'
import './Main.css'

const Main = ({ filterOption }) => {

    const questionsList = useSelector(state => state.question);

    const filterQuestionsByWeek = (questions) => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        return questions.filter(
            (question) => new Date(question.postedOn) >= oneWeekAgo
        );
    };

    const filterQuestionsByPopularity = (questions) => {
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    
        const filteredAndSortedQuestions = questions
            .filter((question) => new Date(question.postedOn) >= oneDayAgo)
            .sort((a, b) => b.upVote.length - a.upVote.length);
    
        return filteredAndSortedQuestions.reverse();
    };

    const filterQuestionsByTag = (questions) => {
        if (filterOption === 'c/c++') {
            return questions.filter(question =>
                question.questionTags.some(t => t.toLowerCase() === 'c' || t.toLowerCase() === 'c++')
            );
        } else if (filterOption === 'java') {
            return questions.filter(question =>
                question.questionTags.some(t => t.toLowerCase() === 'java' )
            );
        } else if (filterOption === 'python') {
            return questions.filter(question =>
                question.questionTags.some(t => t.toLowerCase() === 'python' )
            );
        }
        return questions;
    };
    
    
    let filteredQuestions = questionsList.data;

    if (filterOption === 'newest') {
        filteredQuestions = filterQuestionsByWeek(filteredQuestions);
    } else if (filterOption === 'popular') {
        filteredQuestions = filterQuestionsByPopularity(filteredQuestions);
    } else if(filterOption === 'c/c++' || filterOption === 'python' || filterOption === 'java') {
        filteredQuestions = filterQuestionsByTag(filteredQuestions)
    }

    return (
        <div className='App_main'>
            <div className="App_main_header">
                <h2>Questions</h2>
                <Link to='/askquestion'>
                    <button className='App_main_button'>Ask Question</button>
                </Link>
            </div>
            <div className="App_main_question">
                {filteredQuestions &&
                    filteredQuestions.slice().reverse().map((question) => (
                        <Question key={question._id} question={question} />
                    ))}
            </div>

        </div>
    )
}

export default Main

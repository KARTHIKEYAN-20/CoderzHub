import * as api from '../api';

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData);
        dispatch({ type: "POST_QUESTION", payload: data });
        dispatch(fetchAllQuestions());
        navigate('/');
    } catch (error) {
        console.log("actions/question.js");
        console.log(error);
    }
}

export const fetchAllQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getAllQuestions();
        dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, answerBody, userAnswered, userId, userPostedEmail, userPosted } = answerData;
        const { data } = await api.postAnswer(id, answerBody, userAnswered, userId, userPostedEmail, userPosted);
        dispatch({ type: "POST_ANSWER", payload: data });
        dispatch(fetchAllQuestions());
    } catch (error) {
        console.log(error);
    }
}

export const viewQuestion = (id, userId) => async (dispatch) => {
    try {
        await api.viewQuestion(id, userId);
        dispatch(fetchAllQuestions());
    } catch (error) {
        console.log(error);
    }
}

export const voteQuestion = (id, userId) => async (dispatch) => {
    try {
        await api.voteQuestion(id, userId);
        dispatch(fetchAllQuestions());
    } catch (error) {
        console.log(error);
    }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        api.deleteQuestion(id);
        dispatch(fetchAllQuestions());
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnswer = (id, answerId) => async (dispatch) => {
    try {
        await api.deleteAnswer(id, answerId);
        dispatch(fetchAllQuestions());
    } catch (error) {
        console.log(error);
    }
}
import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/ask', questionData);
export const viewQuestion = (id, userId) => API.patch(`/questions/view/${id}`, { userId });
export const voteQuestion = (id, userId) => API.patch(`/questions/vote/${id}`, { userId });
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const getAllQuestions = () => API.get('/questions/get');

export const postAnswer = (id, answerBody, userAnswered, userId) => API.patch(`/answers/post/${id}`, { answerBody, userAnswered, userId });
export const deleteAnswer = (id, answerId) => API.patch(`/answers/delete/${id}`, { answerId });
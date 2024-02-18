import axios from 'axios';

const API = axios.create({ baseURL: "https://vigilant-space-eureka-pqj4grvv6q739wrg-5000.app.github.dev/" });

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/ask', questionData);
export const viewQuestion = (id, userId) => API.patch(`/questions/view/${id}`, { userId });
export const voteQuestion = (id, userId) => API.patch(`/questions/vote/${id}`, { userId });
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const getAllQuestions = () => API.get('/questions/get');

export const postAnswer = (id, answerBody, userAnswered, userId, userPostedEmail, userPosted) => API.patch(`/answers/post/${id}`, { answerBody, userAnswered, userId, userPostedEmail, userPosted });
export const deleteAnswer = (id, answerId) => API.patch(`/answers/delete/${id}`, { answerId });
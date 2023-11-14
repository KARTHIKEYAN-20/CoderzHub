import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);
export const postQuestion = (questionData) => API.post('/questions/ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const postAnswer = (id, answerBody, userAnswered) => API.patch(`/answers/post/${id}`, { answerBody, userAnswered });
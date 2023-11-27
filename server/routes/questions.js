import express from 'express'
import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion, viewQuestion } from '../controllers/questions.js'

const router = express.Router();
router.post('/Ask', AskQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', deleteQuestion);
router.patch('/vote/:id', voteQuestion);
router.patch('/view/:id', viewQuestion);

export default router;
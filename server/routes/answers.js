import express from "express";
import { postAnswers, deleteAnswer } from '../controllers/answers.js';

const router = express.Router();
router.patch('/post/:id', postAnswers);
router.patch('/delete/:id', deleteAnswer);

export default router;
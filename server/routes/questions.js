import express from 'express'
import { AskQuestion } from '../controllers/questions'

const router = express.Router();
router.post('/Ask', AskQuestion);

export default router;
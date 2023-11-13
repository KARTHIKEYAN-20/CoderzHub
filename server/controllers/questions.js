import mongoose from 'mongoose'
import Question from '../models/Questions.js'

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Question({ ...postQuestionData, userId: req.userId });
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully");
    } catch (error) {
        console.log(error);
        res.status(409).json("Couldn't post a question");
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Question.find();
        res.status(200).json(questionList);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}
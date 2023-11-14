import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAnswers = async (req, res) => {
    const { id: _id } = req.params;
    const { answerBody, userAnswered } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...');
    }

    try {
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, { $addToSet: { 'answers': [{ answerBody, userAnswered, userId: req.userId }] } });
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(400).json(error);
    }
}
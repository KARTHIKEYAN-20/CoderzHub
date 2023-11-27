import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAnswers = async (req, res) => {
    const { id: _id } = req.params;
    const { answerBody, userAnswered, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...');
    }

    try {
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, { $addToSet: { 'answers': [{ answerBody, userAnswered, userId }] } });
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { answerId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...');
    }

    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        return res.status(404).send('Answer unavailable...');
    }

    try {
        await Questions.updateOne(
            { _id },
            { $pull: { 'answers': { _id: answerId } } }
        );
        res.status(200).json({ message: "Successfully deleted..." });
    } catch (error) {
        res.send(405).json(error);
    }
} 
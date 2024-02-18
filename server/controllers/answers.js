import mongoose from "mongoose";
import Questions from "../models/Questions.js";
import sendEmail from "../emailSender/emailSender.js";

export const postAnswers = async (req, res) => {
    const { id: _id } = req.params;
    const { answerBody, userAnswered, userId, userPostedEmail, userPosted } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...');
    }

    try {
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, { $addToSet: { 'answers': [{ answerBody, userAnswered, userId }] } });
        try {
            const recipientEmail = userPostedEmail;
            const subject = 'New Answer Notification';
            const body = `Hey ${userPosted},\n\nYou got a new answer from ${userAnswered}.`;

            await sendEmail(recipientEmail, subject, body);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
        }
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
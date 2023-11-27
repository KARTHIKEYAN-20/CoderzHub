import Question from '../models/Questions.js'
import mongoose from 'mongoose'
import Questions from '../models/Questions.js';

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Question({ ...postQuestionData });

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

export const deleteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable');
    }
    try {
        await Question.findByIdAndRemove(_id);
        res.status(200).json({ message: "Successfully deleted..." });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { userId } = req.body;

    try {
        const question = await Questions.findById(_id);
        const upvoteIndex = question.upVote.findIndex((id) => id === String(userId));
        if (upvoteIndex === -1) {
            question.upVote.push(userId);
        } else {
            question.upVote = question.upVote.filter((id) => id !== String(userId));
        }
        await Questions.findByIdAndUpdate(_id, { upVote: question.upVote });
        res.status(200).json({ message: "Voted successfully..." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while voting" });
    }
}

export const viewQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { userId } = req.body;

    try {
        const question = await Questions.findById(_id);
        const viewIndex = question.views.findIndex((id) => id === String(userId));
        if (viewIndex === -1) {
            question.views.push(userId);
            await Questions.findByIdAndUpdate(_id, { views: question.views });
            res.status(200).json({ message: "View counted successfully..." });
        } else {
            res.status(200).json({ message: "View already counted..." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while counting view" });
    }
}


// export const voteQuestion = async (req, res) => {
//     const { id: _id } = req.params;
//     const { userId } = req.body;

//     try {
//         const question = await Questions.findById(_id);
//         const upvote = question.upvote.findIndex((id) => id === String(userId));
//         if (upvote === -1) {
//             question.upVote.push(userId);
//         } else {
//             question.upVote = question.upVote.filter((id) => id !== String(userId));
//         }
//         await Questions.findByIdAndUpdate(id, question);
//         res.send(200).json({ message: "Voted successfully..." });
//     } catch (error) {

//     }
// }

// export const viewQuestion = async (req, res) => {
//     const { id: _id } = req.params;
//     const { userId } = req.body;

//     try {
//         const question = await Questions.findById(_id);
//         const view = question.view.findIndex((id) => id === String(userId));
//         if (view === -1) {
//             question.view.push(userId);
//         }
//         await Questions.findByIdAndUpdate(id, question);
//         res.send(200).json({ message: "view counted successfully..." });
//     } catch (error) {

//     }
// }
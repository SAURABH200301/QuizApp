/* eslint-disable no-undef */
const express = require('express');
const Quiz = require('../models/Quiz');
const router = express.Router();


router.post('/getquiz', async (req, res) => {
    try {
        const quizzes = await Quiz.find();

        if (quizzes.length === 0) {
            return res.status(404).json({ message: 'No quizzes found' });
        }

        res.status(200).json({ quizzes });
    } catch (error) {
        console.log(error)
    }
})


router.post('/setquiz', async (req, res) => {
    try {
        let success = false;
        let quiz = await Quiz.findOne({ title: req.body.title });
        if (quiz) return res.status(400).json({ error: "Sorry the quiz already exists" });

        quiz = await Quiz.create({
            attemptedBy: [],
            createdBy: req.body.createdBy, // will receive from the user
            title: req.body.title,
            totalMarks: req.body.totalMarks,
            numberOfQues: req.body.numberOfQues,
            questions: req.body.questions
        })

        const data = {
            id: quiz.id
        }
        success = true;

        res.json({ success, data })

    } catch (error) {
        console.log(error);
    }
})





module.exports = router;
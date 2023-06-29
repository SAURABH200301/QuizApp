/* eslint-disable no-undef */
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema([{
    attemptedBy: [
        {
            type: Object,
            ref: 'User'
        }
    ],
    createdBy: {
        type: Object,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    },
    numberOfQues: {
        type: Number,
        required: true
    },
    questions: [
        {
            quesType: {
                type: String,
                required: true
            },
            questionText: {
                type: String,
                required: true
            },
            options: [
                {
                    type: String
                }
            ],
            ans: {
                type: String,
                required: true
            },
            marks: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
}]);

module.exports = mongoose.model('Quiz', QuizSchema);

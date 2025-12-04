import React, { useState } from 'react';
import './Quiz.css';

const quizQuestions = [
    {
        question: "What is the most spoken language in the world?",
        options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
        correct: 1
    },
    {
        question: "Which organization is known for humanitarian aid worldwide?",
        options: ["WHO", "Red Cross", "UNESCO", "UNICEF"],
        correct: 1
    },
    {
        question: "What does 'Namaste' mean?",
        options: ["Hello", "Goodbye", "I bow to you", "Thank you"],
        correct: 2
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
        if (index === quizQuestions[currentQuestion].correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestion < quizQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
    };

    if (showResult) {
        return (
            <div className="quiz glass">
                <h3>Quiz Complete! 🎀</h3>
                <p className="quiz-score">
                    You scored {score} out of {quizQuestions.length}
                </p>
                <button className="btn btn-primary" onClick={resetQuiz}>
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="quiz glass">
            <div className="quiz-progress">
                Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
            <h3 className="quiz-question">{quizQuestions[currentQuestion].question}</h3>
            <div className="quiz-options">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        className={`quiz-option ${selectedAnswer === index
                                ? index === quizQuestions[currentQuestion].correct
                                    ? 'correct'
                                    : 'incorrect'
                                : ''
                            }`}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;

const express = require('express');
const triviaQuestions = require('../questions');

const router = express.Router();

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    res.send('Quiz has ended. Please check your score at /quiz/score.');
  } else {
    const question = triviaQuestions[currentQuestionIndex].question;
    res.send(`
      <h1>Trivia Quiz</h1>
      <p>${question}</p>
      <form method="post" action="/quiz">
        <input type="text" name="answer" required />
        <button type="submit">Submit Answer</button>
      </form>
    `);
  }
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer.toLowerCase().trim();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    res.send(`<p>Correct answer! Your current score is: ${score}</p>`);
  } else {
    res.send(`<p>Incorrect answer! The correct answer is: ${correctAnswer}</p>`);
  }

  currentQuestionIndex++;
});

router.get('/score', (req, res) => {
  res.send(`<h1>Quiz Ended</h1><p>Your final score is: ${score}</p>`);
});

module.exports = router;

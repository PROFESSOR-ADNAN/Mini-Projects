'use strict';

// Dom Elements
const btnCheckEl = document.querySelector('.check');
const btnAgainEl = document.querySelector('.again');

const bodyEl = document.querySelector('body');
const highscoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const messageEl = document.querySelector('.message');
const guessInputEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');

// Starting Conditions
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

// Guessing the secreteNumber
btnCheckEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);
  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      highscoreEl.textContent = highScore;
    }
    displayMessage('🎉 Correct Number');
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = 'green';
    numberEl.style.width = '30rem';
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You have lost the game');
      scoreEl.textContent = 0;
    }
  }
});

// Restarting a new Game
btnAgainEl.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing ...');
  bodyEl.style.backgroundColor = '#222';
  numberEl.textContent = '?';
  scoreEl.textContent = score;
  numberEl.style.width = '15rem';
  guessInputEl.value = '';
});

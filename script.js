'use strict';

let secretNumber = 0;
const generateNumber = maxNumber =>
  (secretNumber = Math.trunc(Math.random() * maxNumber) + 1);

generateNumber(40);

let score = 20;
let highscore = 0;

const displayMessage = (className, msg) => {
  document.querySelector(className).textContent = msg;
};

displayMessage('.score', score);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('.message', '⛔ No number!');

    // WHEN ITS WINNER
  } else if (guess === secretNumber) {
    displayMessage('.number', secretNumber);
    displayMessage('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';
    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', highscore);
    }
    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', '👾 You lost the game!');
      document.querySelector('body').style.backgroundColor = '#c45039';
      document.querySelector('.check').style.display = 'none';
      displayMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  generateNumber(40);
  score = 20;
  displayMessage('.score', score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.display = 'inline';
  displayMessage('.message', 'Start guessing...');
  document.querySelector('.guess').value = '';
  displayMessage('.number', '?');
});

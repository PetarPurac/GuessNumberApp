'use strict';

//DOMS ARE PART OF WEB API'S not JS
//WEB APIS can interact with JS

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const changeNumberWidth = width => {
  document.querySelector('.number').style.width = width;
};

const changeBodyColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};
let secretNumber = Math.trunc(Math.random(20) * 20 + 1);
let score = 20;
let highscore = 0;

const check = document.querySelector('.check');
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayNumber(secretNumber);
    changeBodyColor('#60b347');
    changeNumberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '⬆ Number is too high' : '⬇ Number is too low'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      displayScore(0);
    }
  }
});

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random(20) * 20 + 1);
  displayMessage('Play Again 🎭');
  displayScore(score);
  changeBodyColor('#222');
  changeNumberWidth('15rem');
  displayNumber('?');
  document.querySelector('.guess').value = '';
});

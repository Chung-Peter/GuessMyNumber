'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

// Declare variables
const domMessage = document.querySelector('.message');
const domScore = document.querySelector('.score');
const domHighScore = document.querySelector('.highscore');
let secretNumber;
let score;
let highScore = 0; //Number(domScore.textContent);
// domHighScore.textContent = highScore;

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = secretNumber;

  score = 20; //Number(domScore.textContent);
  domScore.textContent = score;
  //   console.log(`Game reset`, score, secretNumber);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //   console.log(document.querySelector('.guess').textContent);
  domMessage.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
};

resetGame();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //   console.log('Score:', score, typeof score);

  if (!guess) {
    domMessage.textContent = `⚠ Not a valid guess!;`;
  }

  // Player wins
  else if (guess === secretNumber) {
    domMessage.textContent = `🎉 Correct Number!`;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      domHighScore.textContent = highScore;
    }
  }

  //   // Too high
  //   else if (guess > secretNumber) {
  //     domMessage.textContent = `Your guess is too high`;
  //     score--;
  //     domScore.textContent = score;
  //   }

  //   // Too low
  //   else if (guess < secretNumber) {
  //     domMessage.textContent = `Your guess is too low`;
  //     score--;
  //     domScore.textContent = score;
  //   }

  // Wrong Guess
  else {
    domMessage.textContent =
      guess > secretNumber ? `Your guess is too high` : `Your guess is too low`;
    score--;
    domScore.textContent = score;
  }

  // GAME OVER
  if (score <= 0) {
    domMessage.textContent = `You lose! 😢`;
    score = 0;
    domScore.textContent = score;
  }
});

// document.querySelector('.again').addEventListener('click', function () {
//   resetGame();
// });
document.querySelector('.again').addEventListener('click', resetGame);

'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
document.querySelector('.guess').value = 21;
document.querySelector('.guess').value = 22;
console.log(document.querySelector('input.guess').value);*/

let secretNumber = makeSecretNumber(20);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

function makeSecretNumber(number) {
  return Math.trunc(Math.random() * number) + 1;
}

// Whenever user clicks Check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'Please add number';
    displayMessage('please add number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('You got it!');
    displayNumber(secretNumber);

    // set high score
    if (document.querySelector('.score').textContent > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Change background to green
    document.querySelector('body').style.backgroundColor = '#60b347';

    // change number box to be double the size
    document.querySelector('.number').style.width = '30rem';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // if guess is greater than secret number, print too high
      // otherwise print too low
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lose');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.btn.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('start guessing');
  secretNumber = makeSecretNumber(20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  document.querySelector('.guess').value = '';
});

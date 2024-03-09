let randnum = Math.floor(Math.random() * 100) + 1;
let range = document.getElementById("range");
let guess = document.getElementById("lguess");
let count = document.getElementById("count");
let guessField = document.getElementById("guess");
let guessSubmit = document.getElementById("guesssubmit");

guessCount = 10;
let resetButton;

function checkGuess() {
  count.textContent = guessCount - 1;
  const userGuess = Number(guessField.value);
  if (guessCount === 10) {
    guess.textContent = 'Previous guesses: ';
  }
  guess.textContent += userGuess + ' ';
  if (userGuess === randnum) {
    guess.textContent = ' ';
    range.textContent = 'Congratulations! You got it right!';
    range.style.color = 'green';
    setGameOver()
  }
  else if (guessCount === 1) {
    guess.textContent = ' ';
    range.textContent = '!!!GAME OVER!!!';
    range.style.color = "red";
    setGameOver();
  }
  else {
    if (userGuess < randnum) {
      range.textContent = 'Last guess was too low!';
    } else if (userGuess > randnum) {
      range.textContent = 'Last guess was too high!';
    }
  }
  guessCount--;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'New game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 10;
  const resetParas = document.querySelectorAll('.resultParas h2');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }
  range.style.color = '';
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  randnum = Math.floor(Math.random() * 100) + 1;
}
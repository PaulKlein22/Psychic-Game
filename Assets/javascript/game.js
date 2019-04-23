const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let guessedLetters = [];
let letterToGuess = null;
let guessesLeft = 10;
let wins = 0;
let losses = 0;

const updateGuessesLeft = () => {
  document.getElementById('guesses-left').innerHTML = guessesLeft;
};

const updateLetterToGuess = () => {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

const updateGuessesSoFar = () => {
  document.getElementById('guesses-so-far').innerHTML = guessedLetters.join(
    ', '
  );
};

const reset = function() {
  guessesLeft = 10;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function(event) {
  guessesLeft--;
  const letter = String.fromCharCode(event.which).toLowerCase();
  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();

  if (letter === letterToGuess) {
    wins++;
    document.getElementById('wins').innerHTML = wins;
    reset();
  }

  if (guessesLeft === 0) {
    losses++;
    document.getElementById('losses').innerHTML = losses;
    reset();
  }
};

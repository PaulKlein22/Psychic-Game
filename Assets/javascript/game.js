var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;
var guesses = 10;

var randomLetter = letters[Math.floor(Math.random() * letters.length)];

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === randomLetter){
            wins++;
            guesses = 10
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
    } 
    else {
            guesses--;
    }
    if(guesses === 0){
            losses++
            guesses = 10
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Remaining Guesses: " + guesses;
    document.getElementById("chosen").innerHTML = "Your Guesses So Far: " + userGuess;
}
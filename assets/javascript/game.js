// Create an array of letter choices
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                   "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x",
                   "y", "z"];
    // console.log(compChoice); 

// Let the computer choose random letters
var randomLetter = compChoice [Math.floor(Math.random() * compChoice.length)] 
    // console.log(randomLetter); 

// Press any key to start the game
document.onkeyup = function(){
    var userGuess = event.key;
    console.log(this);

}


var wins = 0;
var losses = 0;
var numGuesses= 5;
var guessChoices = [];
     

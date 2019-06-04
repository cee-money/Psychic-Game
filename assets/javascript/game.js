// Instructions:
//Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
//     -Guess what letter I'm thinking of
//     -Wins: (# of times the user has guessed the letter correctly)
//     -Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
//     -Guesses Left: (# of guesses left. This will update)
//     -Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
//     -When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
//     -When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).//

//--------------------------------------------------------------------------------

// Wins, losses, and remaining guesses counters
var wins = 0;
var losses = 0;
var guesses = 9;

// Array of computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of wrong user guesses
var wrongGuessesArray = [];

// Variables to hold references to all html sections game will update
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess");
var guessesText = document.getElementById("guesses");
var guessesHistoryText = document.getElementById("guessesHistory");

// Computer chooses letter randomly from computerChoices array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// User keystroke to trigger a win or loss and -1 guesses left until guesses left = 0
document.onkeyup = function(event) {
    var userGuess = event.key;

// Alert user if their guess was not a letter key, as only those will be valid guesses
    if (!computerChoices.includes(userGuess)) {
        alert("Choose letters only!");
        return;
    }

// if my guess === computer's guess immediate win, game reset (set counters to 0 0 9, display original HTML, computer to make new guess)
    if (userGuess == computerGuess) { 
        // console.log("entered");
        wins++;
        guesses=9;
        winsText.textContent = "Wins: " + wins;
        guessesText.textContent =  "Guesses left: " + guesses;
        guessesHistory.textContent= "Your Guesses So Far: ";
        wrongGuessesArray = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
 // else if my guess !== computer's guess, and I have guesses remaining, and my guess has not already been guessed, I get 8 more guesses then game resets upon win or loss (set counters to 0 0 9, display original HTML)
    } else if (guesses > 1 && !wrongGuessesArray.includes(userGuess)) { 
        guesses--;
        guessesText.textContent =  "Guesses left: " + guesses;
        guessesHistoryText.append(" " + userGuess + " ");
        wrongGuessesArray.push(userGuess);
// else if my guess !=== computer's guess and I have no more guesses and my guess has not already been guessed, loss counter increments by 1 and game resets
    } else if (!wrongGuessesArray.includes(userGuess)) {
        losses++;
        guesses=9;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent =  "Guesses left: " + guesses;
        guessesHistory.textContent = "Your Guesses So Far: ";
        wrongGuessesArray = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // console.log(computerGuess);
    }
}



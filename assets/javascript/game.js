// 1.    Pick a random word.

// 2.    Take the player’s guess.

// 3.    Quit the game if the player wants to.

// 4.    Check that the player’s guess is a valid letter.

// 5.    Else Show Hangman Image (1,2,3,4,5)

// 6.    Keep track of letters the player has guessed.

// 7.    Show the player their progress.

// 8.    Finish when the player has guessed the word.


// VARIABLES
// ==========================================================================

       
var displayWins = document.getElementById("display-wins");
var displayLosses  = document.getElementById("display-losses");
var displayWord = document.getElementById("display-word");
var displayGuesses = document.getElementById("display-guesses");
var displayLetters = document.getElementById("display-letters");
    
//Possible words to get
Aeronyde = {

    Words: ["Drone", "Aeronyde", "Unmanned", "Autonomous", "Limitless"],

    displayWord: '',
    wins: 0,
    losses: 0,
    guessedLetters: [],
    guessRemaining: 0,
    placeHolder: '',
    dashes: "_",
    buffer: 6,

messages = {
        win: 'You Got It!',
        lose: 'Game over!',
        guessed: ' already guessed, please try again...',
        validLetter: 'Please enter a letter from A-Z'
    };

// FUNCTIONS
// ==============================================================================


startGame: function () {
    writeDocument();
},

displayRandomWord: function () {
    this.guessedLetters = [];
    this.displayWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.guessRemaining = this.displayWord.length + this.buffer;
    this.placeHolder = this.dashes.repeat(this.displayWord.length);
},

mainProcess: function (letterGuessed) {

    if (this.guessedLetters.indexOf(letterGuessed) == -1) {
        if (this.pickedWord.includes(letterGuessed)) {

            var characterArray = this.placeHolder.split('');

            for (var i = 0; i < this.pickedWord.length; i++) {
                if (this.pickedWord[i] === letterGuessed) {
                    characterArray[i] = letterGuessed;
                }
            }
            this.placeHolder = characterArray.join('');

            if (this.pickedWord === this.placeHolder) {
                this.wins++;
                this.gameReset();
            }

        } else {
            this.guessedLetters.push(letterGuessed);
            this.guessRemaining--;

            if (this.guessRemaining == 0) {
                alert("You lose!");
                this.losses++;
                this.gameReset();
            }
        }

        writeDocument();

    }

}

};

superHeroes.gameReset();

superHeroes.gameStart();



// MAIN PROCESS
// ==============================================================================

function writeDocument() {
    winCount.textContent = superHeroes.wins;
    lossCount.textContent = superHeroes.losses;
    current.textContent = superHeroes.placeHolder.split('').join(" ");
    guesses_left.textContent = superHeroes.guessRemaining;
    lettersGuessed.textContent = superHeroes.guessedLetters.join(" ");
}


document.onkeyup = function (event) {

    var characterGuess = event.key;

    superHeroes.userInput(characterGuess);
}
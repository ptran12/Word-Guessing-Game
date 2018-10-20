//Make Array and Variables for holding data 
var wordOptions = ["blue", "purple", "orange", "azure", "cream", "crimson", "green", "olive"]
// Randomly selected word from array
var selectedWord = ""
var lettersinWord = [];
var numBlanks = 0;
//tracking for incorrect guesses from user 
var blanksAndSuccesses = [];
var lettersWrong = [];

//Game counters 
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// =============================================================================

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("") //split the letters from the computers chosen word string 
    numBlanks = lettersinWord.length; //

    //This will RESET the game every round
    guessesLeft = 9;
    lettersWrong = []
    blanksAndSuccesses = [];

    //Creating random blanks of computer generated word 
    for (var i=0; i<numBlanks; i++){ 
        blanksAndSuccesses.push("_");
    }

    //HTML needs to reflect 
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft; 
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing with console log 
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses)
}

// Determine if specfic letters exist in the word
function allLetters (letter) {
    // alert(letter);
    var specficLetter = false;
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            specficLetter = true;
            // alert("Correct Letter");
        }
    } 

    if(allLetters) {
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }

    else {
        lettersWrong.push(letter);
        numGuesses--
    }

    
    console.log(blanksAndSuccesses)
}

//
startGame()

//Registering keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    allLetters(letterGuessed);
        
    //testing  
    console.log(letterGuessed)
}

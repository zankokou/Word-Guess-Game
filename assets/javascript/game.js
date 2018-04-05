

//Create WordBank Array
var wordBankArr = ["mew","pikachu","squirtle", "dragonite", "arbok", "chansey", "flareon", "umbreon", "dugtrio","psyduck", "zapdos", "moltres", "meowth", "onyx", "rhydon", "pidgey", "spheal", "gastly"]
//Generate Random Number based off length of box
var rng = Math.floor(Math.random()* wordBankArr.length);
var chosenWord = wordBankArr[rng];

//Create empty Arrays
var underScoreArr = [];
var rightLettersArr = [];
var wrongLettersArr = [];

//Creat Counter variables
var wins = 0;
var losses = 0;
var guesses = 10;

//Create State Of Game
var gameState = false;




//functions
function check(){
    // console.log("Game Started");
    // console.log("rng: "+ rng);
    console.log("chosenWord: "+ chosenWord);
    console.log("UnderScores: "+ underScoreArr);
    console.log("Wrong letters " + wrongLettersArr);
    console.log("Right letters " + rightLettersArr);
}

//function to push underscores 
function generateUnderscores(){
    for (var i = 0; i < chosenWord.length; i++){
        underScoreArr.push(" _ ");
    }
    return underScoreArr;

}



//Main Function
function gameStart(){
    underScoreArr = [];
    rightLettersArr = [];
    wrongLettersArr = [];
    guesses = 10;
    gameState = true;
    rng = Math.floor(Math.random()* wordBankArr.length);
    chosenWord = wordBankArr[rng];
    generateUnderscores();
    document.getElementById("underscores").textContent= [underScoreArr.join(" ")];
    document.getElementById("correctGuesses").textContent= "Correct Guesses: ";
    document.getElementById("wrongGuesses").textContent= "Wrong Guesses: ";
    document.getElementById("lives").textContent= ["Guesses Left: "+ guesses];




//user input function
document.onkeypress = function (event) {
    var keyword = String.fromCharCode(event.keyCode);

    if (chosenWord.indexOf(keyword) > -1){
          underScoreArr[chosenWord.indexOf(keyword)] = keyword;
          
          if (rightLettersArr.includes(keyword)){
                // alert("You already guessed that letter!");
            }
          else{rightLettersArr.push(keyword);
            }
          
        //prints letter into underscores
        document.getElementById("underscores").textContent= [underScoreArr.join(" ")];
        document.getElementById("correctGuesses").textContent= ["Correct Guesses: " + rightLettersArr];

        //place letters in correct location of word
        function correctGuess(event) {
            for (var j = 0; j < chosenWord.length; j++) {
                if (chosenWord[j] === keyword) {
                    underScoreArr[j] =  keyword;
                }
            }            
        }
    

            if (underScoreArr.join("") == chosenWord){
                alert("Congratulations " + chosenWord + " was Caught!!!");
                wins++;
                document.getElementById("wins").textContent= ["Pokemon Caught: "+ wins];
                gameStart();
            }

    }

    

    else {
        if (wrongLettersArr.includes(keyword)){
            // alert("You already guessed that letter!");
        }

        //if game over alert!
        else if (guesses === 0){
            alert("You are out of guesses! " + chosenWord + " got away!")
            losses++;
            document.getElementById("losses").textContent= ["Pokemon Lost: "+ losses];
            gameStart();
        }

        else {
            wrongLettersArr.push(keyword);
            document.getElementById("wrongGuesses").textContent= ["Wrong Guesses: "+ wrongLettersArr];
            guesses--;
            document.getElementById("lives").textContent= ["Guesses Left: "+ guesses];
        }





    }
    
    check();

};




}






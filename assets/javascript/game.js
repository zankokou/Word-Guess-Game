

//functions
function checkLength () {
    console.log(underScore);
    console.log(underScore.length/2);

}

//Logic

//Create Word Box Array
var wordBox = ["mew","lapras","pikachu","squirtle", "charmander"]
let correctArr = [];
let buHaoArr = [];
//Pull Word from Word Box Array
let rng = Math.floor(Math.random()* wordBox.length);
let chosenOne = wordBox[rng];
console.log(chosenOne);


//create underscores based on length of word
let underScore = [];

function generateUnderscores () {
    for (let i=0; i < chosenOne.length; i++) {
        underScore = underScore + "_ "
        
    }
}


generateUnderscores();
checkLength();

//Get userInput 
document.onkeyup = function(event){
    var userChoice = event.key.toLowerCase();
    console.log(userChoice);


}


//Check userInput is correct
//if correct go to right array
//if wrong go to wrong array
//Once word is guessed, rng word

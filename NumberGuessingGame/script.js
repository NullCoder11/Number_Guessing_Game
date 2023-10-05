let attempts = 0; 
let randomNum =Math.floor(Math.random()*100+1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemtsText = document.getElementById("attempts");

//Event Listeners

submit.addEventListener("click",checkGuess);
function checkGuess(){
    const userValue = Number(guess.value);
    attempts++;

    //conditionals
    if(userValue === randomNum){
        hint.textContent="Congratulations!You Guessed it!!";
    }else if(userValue < randomNum){
        hint.textContent="Too low!! Try Again!";
    }else{
        hint.textContent="Too high!! Try Again!";
    }
    attemtsText.textContent="Attempts: "+attempts;

}

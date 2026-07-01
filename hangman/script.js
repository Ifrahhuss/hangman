const hangManImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const GuessesText = document.querySelector(".guesses-text");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord;
let wrongGuessCount = 0;
const maxGuess = 10;
const getRandomWord = () => {
    const {word, hint} = wordlist[Math.floor(Math.random()*wordlist.length)];
    currentWord = word;
    document.querySelector(".hint-text").innerText = hint;
    wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
}

const initGame = (button, clickedletter) => {
    if (currentWord.includes(clickedletter)){
        [...currentWord].forEach((l, i) => {
            if (l === clickedletter){
                wordDisplay.querySelectorAll("li")[i].innerText = l;
                wordDisplay.querySelectorAll("li")[i].classList.add("guessed");
        }
    });
    // const letterElements = document.querySelectorAll(".letter");
} else {
    wrongGuessCount++;
    hangManImage.src = `assets/h-${wrongGuessCount}.jpg`;
    // document.querySelector(".hangman-box img").src = `assets/h-${wrongGuessCount}.jpg`;
    // document.querySelector(".guesses-text").innerText += clickedletter + " ";
}
button.disabled = true;//disables the button so after you click letter, you cant click again
GuessesText.innerText = `Incorrect Guesses:${wrongGuessCount} / ${maxGuess}`;

if (wrongGuessCount === maxGuess){
    alert("Game Over! You have reached the maximum number of incorrect guesses.");
    resetGame();
}
}

for (let i = 97; i<=122; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
    }

getRandomWord();
const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord;
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
}
}

for (let i = 97; i<=122; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
    }

getRandomWord();
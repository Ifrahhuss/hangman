const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");

const getRandomWord = () => {
    const {word, hint} = wordlist[Math.floor(Math.random()*wordlist.length)];
    document.querySelector(".hint-text").innerText = hint;
    wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
}

for (let i = 97; i<=122; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}

getRandomWord();
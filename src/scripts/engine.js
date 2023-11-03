const emojis = [
  "🍎",
  "🍎",
  "🍏",
  "🍏",
  "🍊",
  "🍊",
  "🍍",
  "🍍",
  "🥑",
  "🥑",
  "🍈",
  "🍈",
  "🍌",
  "🍌",
  "🥕",
  "🥕",
];

let turnedCards = [];

emojis.sort(() => (Math.random() > 0.5 ? 2 : -2));

const game = document.querySelector(".game");
for (let i = 0; i < emojis.length; i += 1) {
  const div = document.createElement("div");
  div.innerHTML = emojis[i];
  div.className = "card";
  div.id = i;
  div.onclick = handleClick;
  game.appendChild(div);
}

function handleClick() {
  if (this.className.includes("cardMatch")) {
    return
  }
  if (turnedCards.length === 0) {
    this.classList.add("turnCard");
    turnedCards.push(this);
  } else if (turnedCards.length === 1 && turnedCards[0].id !== this.id) {
    this.classList.add("turnCard");
    turnedCards.push(this);
  }

  if (turnedCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if ((turnedCards[0].innerHTML === turnedCards[1].innerHTML)) {
    turnedCards[0].classList.add("cardMatch");
    turnedCards[1].classList.add("cardMatch");
  } else {
    turnedCards[0].classList.remove("turnCard");
    turnedCards[1].classList.remove("turnCard");
  }

  turnedCards = [];

  const cardMatch = document.querySelectorAll(".cardMatch");
  if (cardMatch.length === emojis.length) {
    alert("Vitória!");
  }
}

"use strict";

let userscore = 0;
let compscore = 0;
let resultcontainerEl = document.querySelector(".gameover");
let score = document.querySelector(".score-point");
let paper = document.querySelector(".img-container-paper");
let scissor = document.querySelector(".img-container-scissor");
let rock = document.querySelector(".img-container-rock");
let playerpaperEl = document.querySelector(".paper-click");
let playerscissorEl = document.querySelector(".scissor-click");
let playerrockEl = document.querySelector(".rock-click");
let computerpaperEl = document.querySelector(".comp-paper-click");
let computerscissorEl = document.querySelector(".comp-scissor-click");
let computerrockEl = document.querySelector(".comp-rock-click");
let gamecontainer = document.querySelector(".game-container");
let playcontainer = document.querySelector(".play-container");
let playagain = document.querySelector(".btn-play");
let resultUpadate = document.querySelector(".message");
let reset = document.querySelector(".btn-reset");
let closex = document.querySelector(".close-img");
let rulescontainer = document.querySelector(".close-tag");
let rules = document.querySelector(".rules");
const playgame = (userinput) => {
  if (userscore === 10) {
    const userwon = `<p class='userwon'>YOU WON THE GAME</p>
      <p class='gameovertxt'>GAME OVER</p>`;
    resultcontainerEl.innerHTML = userwon;
  } else if (compscore === 10) {
    const userLOSS = `<p class='userloss'>YOU LOSS THE GAME</p>
      <p class='gameovertxt'>GAME OVER</p>`;
    resultcontainerEl.innerHTML = userLOSS;
  } else {
    const userchoice = userinput;
    const compchoice = getcomchoice();
    const result = getresult(userchoice, compchoice);
    updatescore(result);
    displayresult(userchoice, compchoice, result);
    displaycompchoise(compchoice);
  }
};
const getcomchoice = () => {
  const randomnum = Math.trunc(Math.random() * 3);
  if (randomnum === 0) {
    return "rock";
  } else if (randomnum === 1) {
    return "paper";
  } else if (randomnum === 2) {
    return "scissor";
  }
};

function getresult(userchoice, compchoice) {
  if (userchoice === "rock") {
    if (compchoice === "rock") {
      return "DRAW";
    } else if (compchoice === "paper") {
      return "LOST";
    } else if (compchoice === "scissor") {
      return "WON";
    }
  } else if (userchoice === "paper") {
    if (compchoice === "rock") {
      return "WON";
    } else if (compchoice === "paper") {
      return "DRAW";
    } else if (compchoice === "scissor") {
      return "LOST";
    }
  } else if (userchoice === "scissor") {
    if (compchoice === "rock") {
      return "LOST";
    } else if (compchoice === "paper") {
      return "WON";
    } else if (compchoice === "scissor") {
      return "DRAW";
    }
  }
}
const updatescore = (result) => {
  if (result === "WON") {
    userscore = userscore + 1;
  } else if (result === "LOST") {
    compscore = compscore + 1;
  }
};
const displayresult = (userchoice, compchoice, result) => {
  score.innerText = userscore;
  if (result === "WON") {
    const youwon = `
    <p class='youwon'>YOU WON</p>`;
    resultUpadate.innerHTML = youwon;
  } else if (result === "DRAW") {
    const draw = `
    <p class='draw'>DRAW</p>`;
    resultUpadate.innerHTML = draw;
  } else {
    const youloss = `
    <p class='youloss'>YOU LOSS</p>`;
    resultUpadate.innerHTML = youloss;
  }
};
const displaycompchoise = (compchoice) => {
  if (compchoice === "paper") {
    computerpaperEl.classList.add("open");
    computerpaperEl.classList.remove("close");
    computerscissorEl.classList.add("close");
    computerrockEl.classList.add("close");
  } else if (compchoice === "scissor") {
    computerpaperEl.classList.add("close");
    computerscissorEl.classList.remove("close");
    computerscissorEl.classList.add("open");
    computerrockEl.classList.add("close");
  } else if (compchoice === "rock") {
    computerpaperEl.classList.add("close");
    computerrockEl.classList.remove("close");
    computerscissorEl.classList.add("close");
    computerrockEl.classList.add("open");
  }
};
paper.addEventListener("click", () => {
  playerpaperEl.classList.add("open");
  playerpaperEl.classList.remove("close");
  playerscissorEl.classList.add("close");
  playerrockEl.classList.add("close");
  displaycompchoise();
  gamecontainer.classList.add("close");
  playcontainer.classList.remove("close");
});
scissor.addEventListener("click", () => {
  playerpaperEl.classList.add("close");
  playerscissorEl.classList.remove("close");
  playerscissorEl.classList.add("open");
  playerrockEl.classList.add("close");
  displaycompchoise();
  gamecontainer.classList.add("close");
  playcontainer.classList.remove("close");
});
rock.addEventListener("click", () => {
  playerpaperEl.classList.add("close");
  playerrockEl.classList.remove("close");
  playerscissorEl.classList.add("close");
  playerrockEl.classList.add("open");
  displaycompchoise();
  gamecontainer.classList.add("close");
  playcontainer.classList.remove("close");
});
playagain.addEventListener("click", () => {
  gamecontainer.classList.remove("close");
  playcontainer.classList.add("close");
});
rules.addEventListener("click", () => {
  rulescontainer.classList.add("open");
  rulescontainer.classList.remove("close");
});
closex.addEventListener("click", () => {
  rulescontainer.classList.add("close");
  rulescontainer.classList.remove("open");
});

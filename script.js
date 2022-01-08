const player0S = document.querySelector(".scores--0");
const player1S = document.querySelector(".scores--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const diceImage = document.getElementById("dice--image");
const rollBtn = document.getElementById("rollBtn");
const holdBtn = document.getElementById("holdBtn");
const restartBtn = document.getElementById("restartBtn");
const curret0S = document.querySelector(".current-score--0");
const player0winner = document.querySelector(".player--0--winner");
const player1winner = document.querySelector(".player--1--winner");
const current0S = document.querySelector(".current-score--0");
const current1S = document.querySelector(".current-score--1");
let currentScores, activePlayer, scores, isPlaying;

player0S.textContent = 0;
player1S.textContent = 0;
diceImage.classList.add("hidden");

//Function part

const startFunction = () => {
  isPlaying = true;
  activePlayer = 0;
  diceImage.classList.add("hidden");
  scores = [0, 0];
  currentScores = 0;
  player0S.textContent = 0;
  player1S.textContent = 0;
  player0.classList.add("active--player");
  player0.classList.remove("player--winner");
  player1.classList.remove("active--player", "player--winner");
  player0winner.classList.add("hidden");
  player1winner.classList.add("hidden");
  current0S.textContent = 0;
  current1S.textContent = 0;
  rollBtn.classList.remove("hidden");
  holdBtn.classList.remove("hidden");
};
startFunction();

const switchFunction = () => {
  document.querySelector(`.current-score--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScores = 0;
  player0.classList.toggle("active--player");
  player1.classList.toggle("active--player");
};

//do Process part

rollBtn.addEventListener("click", () => {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScores += diceNumber;
      document.querySelector(`.current-score--${activePlayer}`).textContent =
        currentScores;
    } else {
      switchFunction();
    }
  }
});

holdBtn.addEventListener("click", () => {
  if (isPlaying) {
    scores[activePlayer] += currentScores;
    document.querySelector(`.scores--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}--winner`)
        .classList.remove("hidden");
      diceImage.classList.add("hidden");
      rollBtn.classList.add("hidden");
      holdBtn.classList.add("hidden");
    } else {
      switchFunction();
    }
  }
});

restartBtn.addEventListener("click", startFunction);

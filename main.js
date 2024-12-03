//создаем ограничители кол-ва игроков
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 4;

const CELLS_NUM = 40;

let gameBoard;

//функция проверки. value в диапазоне или нет
function mathClamp(min, value, max) {
  return min <= value && value <= max;
}

//функция одного игрока. игрок, фактически - это набор параметров
function createPlayer() {
  return {
    name: "name",
    money: 0,
    position: 0,
    companies: [],
    roundsStunned: 0,
    isOnline: true,
  };
}

//функция создания списка со всеми игроками в катке
function createPlayers(playersNum) {
  const players = [];
  for (let i = 0; i < playersNum; i++) {
    const newPLayer = createPlayer();
    players.push(newPLayer);
  }

  return players;
}

function createGameBoard() {
  return {
    playerTurnIndex: 0,
    dice: [0, 0],
    players: [],
    cells: new Array(CELLS_NUM),
    time: 0,
    trades: [],
  };
}

function movePlayer() {
  const diceSumm = gameBoard.dice[0] + gameBoard.dice[1];
  const player = gameBoard.players[gameBoard.playerTurnIndex];

  player.position += diceSumm;
  if (player.position >= CELLS_NUM) {
    player.position -= CELLS_NUM;
  }
}

function getRandomIntInRange(min, max) {
  return min + Math.floor(Math.random() * max);
}

function diceRoll() {
  gameBoard.dice[0] = getRandomIntInRange(1, 6);
  gameBoard.dice[1] = getRandomIntInRange(1, 6);
}

function updateTimer(newTime) {
  gameBoard.time = newTime;
}

function nextTurn() {
  console.log("next turn");
}

function nextRound() {
  nextTurn();
}

function validatePlayersNum(playersNum) {
  const isPlayersNumInRange = mathClamp(MIN_PLAYERS, playersNum, MAX_PLAYERS);
  //проверка легальности кол-ва игроков(мин 2 - макс 4)
  if (!isPlayersNumInRange) {
    return console.error("Error");
  }
}

//функция начала игры.
function startGame() {
  let playersNum = 4; //зависит от кол-ва игроков(2-4)

  validatePlayersNum(playersNum);

  gameBoard = createGameBoard();
  gameBoard.players = createPlayers(playersNum);

  console.log(gameBoard);
  nextRound();
}

//мейн
const main = () => {
  startGame();

  const nextTurnBtn = document.getElementById("nextTurnBtn");
  nextTurnBtn.addEventListener("click", nextTurn);
};

main();

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 4;

function mathClamp(min, value, max) {
  return min <= value && value <= max;
}

function createPlayer() {
  return {
    money: 0,
    position: 0,
    name: "name",
    companies: [],
    roundsStunned: 0,
  };
}

function createPlayers(playersNum) {
  const players = [];
  for (let i = 0; i < playersNum; i++) {
    const newPLayer = createPlayer();
    players.push(newPLayer);
  }

  return players;
}

function startGame() {
  let playersNum = 4;
  const isPlayersNumInRange = mathClamp(MIN_PLAYERS, playersNum, MAX_PLAYERS);
  if (!isPlayersNumInRange) {
    return console.error("Error");
  }

  const players = createPlayers(playersNum);

  console.log(players);
}

function main() {
  startGame();
}

main();

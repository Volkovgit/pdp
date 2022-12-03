const gameFactory = require('./src/gameFactory');
const gameEnum = require('./src/gamesEnum');

const newGame = gameFactory(gameEnum.TicTackToe)
newGame.startGame()
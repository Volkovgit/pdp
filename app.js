const gameFactory = require('./src/gameFactory');
const gameEnum = require('./src/gamesEnum');

const newGame = new gameFactory(gameEnum.TicTackToe)
newGame.startGame()
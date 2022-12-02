const game = require('./src/game');
const gameEnum = require('./src/gamesEnum');

const newGame = new game(gameEnum.TicTackToe)
newGame.startGame()
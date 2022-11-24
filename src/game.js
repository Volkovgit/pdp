const gameEnum = require('./gamesEnum');
const ticTacToe = require('./tickTacToe/ticTackToe');

function game(gameType) {
  switch (gameType) {
    case gameEnum.TicTackToe:
      return new ticTacToe();
    default:
      break;
  }
}

module.exports = game;

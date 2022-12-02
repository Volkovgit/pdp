const gameEnum = require('./gamesEnum');
const ticTacToe = require('./tickTacToe/ticTackToe');

function gameFactory(gameType) {
  switch (gameType) {
    case gameEnum.TicTackToe:
      return new ticTacToe();
    default:
      return null
  }
}

module.exports = gameFactory;

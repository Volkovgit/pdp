const user = require('./src/user')
const tickTackToe = require('./src/tickTacToe/ticTackToe')


const user1 = user();
const user2 = user();

console.log(user1,user2);

const game = tickTackToe([user1,user2])

console.log(game);
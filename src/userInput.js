const readline = require('readline/promises');

function userInput(){
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  async function userInput(){
    const answer = await rl.question('What do you think of Node.js? ');
    rl.close();
    return answer
  }
  return {
    input:userInput
  }
}

module.exports = userInput
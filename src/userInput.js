const readline = require('readline/promises');

function userInput(text){
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  async function userInput(){
    const answer = await rl.question(`${text}`);
    rl.close();
    return answer
  }
  return {
    input:userInput
  }
}

module.exports = userInput
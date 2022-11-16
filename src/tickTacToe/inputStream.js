const readline = require('readline/promises');

function inputStream(){
  async function stringInput(text){
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const answer = await rl.question(`${text}`);
    rl.close();
    return answer
  }
  return {
    stringInput
  }
}

module.exports = inputStream
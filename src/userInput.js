const readline = require('readline/promises');

const inputValidator = require('./inputValidator');



function userInput(){
  const validator = inputValidator();
  async function userInput(text){
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const answer = await rl.question(`${text}`);
    rl.close();
    return answer
  }
  async function userInputCoordinates(text) {
    return await userInput(`${text} `).then((data) => {
      try {
        return validator.validationInputCoordinates(data);
      } catch (error) {
        console.log(error);
        return userInputCoordinates(text);
      }
    });
  }

  return {
    userInputCoordinates
  }
}

module.exports = userInput
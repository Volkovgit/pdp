const readline = require('readline');

function userInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const userInputObject = {
    rl,
    input() {
      function callbackFunction(text) {
        const promise = new Promise((res, rej) => {
          const answer = rl.question(`${text}`, (input) => {
            res(input);
            rl.close();
          });
        });
        return promise;
      }
      return callbackFunction;
    },
  };

  return userInputObject;
}


module.exports = userInput;

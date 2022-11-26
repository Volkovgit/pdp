const readline = require('readline');

function inputStream(){
  this.stringInput= function(text,callback){
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(`${text}`, (input) => {
      rl.close();
      callback(input);
    });
  }
}

module.exports = inputStream
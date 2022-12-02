const consoleInput = require("./src/consoleInput");
const inputer = require("./src/inputer");


const newInput = new inputer(new consoleInput)
newInput.input('Введите что то',(answer) => {
  console.log('--',answer)
})
console.log();
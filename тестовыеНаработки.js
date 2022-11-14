const userInput = require('./src/userInput')
const inputValidator = require('./src/inputValidator')
const testValidator = inputValidator()
const user = userInput();

// Будем вводить до тех пор пока пользователь не введет два числа от 1 до 3
async function testBlaBla(){
  return await user.input('Test ').then(data=>{
    try {
      return testValidator.validationInputCoordinates(data)
    } catch (error) {
      console.log(error);
      return testBlaBla()
    }
  })
}

testBlaBla().then(data=>console.log(data))
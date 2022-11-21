const userNameInput = require("./userInput")

function game(){
    const inputUserName = userNameInput()
    async function inputUsers(){
        const text = 'Введите имя игрока'
        const userNumber = countUserNumber()
        console.log(userNumber());
        const firstUserName = await inputUserName.input(text)
        console.log(userNumber());
        const secondUserName = await inputUserName.input(text)
        console.log(firstUserName,secondUserName);
    }
    function countUserNumber(){
        let number = 0;
        return function(){
            number+=1;
            return number;
        }
    }
    return {
        inputUsers
    }
}


game().inputUsers()
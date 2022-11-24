function application(){
    async function greeter(){
        console.log('Welcome to my application\nChoose the game:\n1-TicTackToe');
        
    }

    return{
        greeter
    }
}

application().greeter()


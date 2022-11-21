function user(name){
    const randomId = Math.round(Math.random()*100000000);
    return {
        id:randomId,
        userName:name,
        userScope:0
    }
}


module.exports = user;
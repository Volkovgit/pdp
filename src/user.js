function user(){
    const randomId = Math.round(Math.random()*100000000);
    return {
        id:randomId,
        userName:'',
        userScope:0
    }
}


module.exports = user;
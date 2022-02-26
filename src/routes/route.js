const express = require('express');
const router = express.Router();
let players = [];

router.post ("/players",function(req,res){
   
    let player = req.body;
    let playerName = player.name
    for(let i = 0; i < players.length; i++){
        if(players[i].name == playerName){
            res.send('player already exists')
        }
    }
    players.push(player);
    console.log ("Here is the player array",players);
    res.send(players);
}) ;  

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)

})




router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router ;
const Player = require('../models/player');

exports.getAllPlayers = async (req, res) => {
    await Player.findAll({
        order: [
            ['ranking', 'ASC']
        ]
    })
    .then(players => {
        res.json(players);
    })
    .catch(err => {
        res.send({message: err.message});
});  
}  

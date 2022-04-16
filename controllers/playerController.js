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

exports.getPlayerById = async (req, res) => {
    await Player.findOne({where: { id: req.params.id }})
    .then(Player => {
        res.json(Player);
    })
    .catch(err => {
        res.send({message: err.message});
    });
}
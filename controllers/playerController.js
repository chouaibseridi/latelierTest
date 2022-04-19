const Player = require('../models/player');
const { sequelize } = require('../models/sequelize');

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

exports.getStats = async (req, res) => {
    const bestCountry = await getBestCountry();
    res.send(bestCountry);
}

const getBestCountry = async () => {
    return await Player.findAll({
        attributes: [
            'countryCode',
            [sequelize.fn('GROUP_CONCAT', sequelize.literal("lastmatches SEPARATOR ''")),'lastmatches']
        ],
        group: 'countryCode'
    })
    .then(results => {
        results.forEach(r => {
            r.dataValues.wins = calculateWins(r.dataValues.lastmatches)
        })
        
        let max = Math.max.apply(Math, results.map(function(o) { return o.dataValues.wins; }))
        let bestCountry = results.find(obj => obj.dataValues.wins === max);

        return {"bestCountry": bestCountry.dataValues.countryCode, "wins": bestCountry.dataValues.wins};
    })
    .catch(err => {
        return(err.message)
    });  
}

const calculateWins = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}
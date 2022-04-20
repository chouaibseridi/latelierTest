const Player = require('../models/player');
const { sequelize } = require('../models/sequelize');

/* 
    function that fetchs all players from the database
    sends an array of player objects to response
*/
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

/* 
    function that fetchs a single player from the database by his Id
    sends a player object to response
*/
exports.getPlayerById = async (req, res) => {
    await Player.findOne({where: { id: req.params.id }})
    .then(player => {
        player !== null ? res.json(player) : res.json({"error": "no player with the id " +req.params.id })
    })
    .catch(err => {
        res.send({message: err.message});
    });
}
/* 
    function that returns all stats in response to the 3rd question 
    sends an object in response
*/
exports.getStats = async (req, res) => {
    const bestCountry = await getBestCountry();
    const imc = await calculateAverageIMC();
    const heightAvg = await calculateHeightAverage();
    res.json({bestCountry, imc, heightAvg});
}

/* 
    function that calculates the country with best wins ration
    returns an object of type {countryCode, wins} 
*/
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

        return {"countryCode": bestCountry.dataValues.countryCode, "wins": bestCountry.dataValues.wins};
    })
    .catch(err => {
        return(err.message)
    });  
}

/* 
    function that calculates the number of wins from a string of match results
    param String (str) - results of last played matches
    returns an integer 
*/
const calculateWins = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}

/* 
    function that calculates the average IMC of all players
    returns a float
*/
const calculateAverageIMC = async () => {
    return await Player.findAll({
        attributes: [
            [sequelize.literal('AVG(((weight) / (height*height))*10)'),'IMC']
        ]
        })
    .then(result => {
        return result
    })
    .catch(err => {
        return(err.message)
    });  
}

/* 
    function that calculates the height average of all players
    returns a float
*/
const calculateHeightAverage = async () => {
    return await Player.findAll({
        attributes: [
            [sequelize.literal('AVG(height)'),'avg']
        ]
        })
    .then(result => {
        return result
    })
    .catch(err => {
        return(err.message)
    });  
}

var express = require('express');
var playerRouter = express.Router();
var playerController = require('../controllers/playerController');

// this endpoint returns a list of all the players
playerRouter.get('/players', function(req, res) {
    playerController.getAllPlayers(req, res);
});

// this endpoint returns a single player by his Id
playerRouter.get('/player/:id', function(req, res) {
    playerController.getPlayerById(req, res);
});

// this endpoint returns all the stats asked in question 3
playerRouter.get('/stats', function(req, res) {
    playerController.getStats(req, res);
});

module.exports = playerRouter;

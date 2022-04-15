var express = require('express');
var playerRouter = express.Router();
var playerController = require('../controllers/playerController');

playerRouter.get('/players', function(req, res) {
    playerController.getAllPlayers(req, res);
});

playerRouter.get('/player/:id', function(req, res) {
    playerController.getPlayer(req, res);
});

playerRouter.get('/stats', function(req, res) {
    playerController.getStats(req, res);
});

module.exports = playerRouter;
